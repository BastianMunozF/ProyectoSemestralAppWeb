import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Viajeuser } from './viajeuser';
import { Historialusuario } from './historialusuario';

@Injectable({
  providedIn: 'root'
})

export class DbserviceService {

  //Variable para manipular la conexión a la Base de Datos.
  public database!: SQLiteObject

  //Variables para la creación de tablas.

    //Tabla para tipo de Vehículos:
    tablaTipo: string = "CREATE TABLE IF NOT EXISTS tipo (id_tipo INTEGER PRIMARY KEY AUTOINCREMENT, descripcion VARCHAR(20));";

    //Tabla para el tipo de Usuarios:
    tablaRol: string = "CREATE TABLE IF NOT EXISTS rol (id_rol INTEGER PRIMARY KEY AUTOINCREMENT, nombrerol VARCHAR(10));";

    //Tabla para Usuarios
    tablaUsuarios: string = "CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(30) NOT NULL, apellido VARCHAR(30) NOT NULL, correo VARCHAR(30) NOT NULL, fechanacimiento DATE NOT NULL, rut VARCHAR(13) NOT NULL, celular INTEGER NOT NULL, contrasena VARCHAR(30) NOT NULL, id_rol INTEGER NOT NULL, FOREIGN KEY(id_rol) REFERENCES rol(id_rol));";

    //Tabla para tarjeta Usuarios:
    tablaPagoUsuario: string = "CREATE TABLE IF NOT EXISTS pago(id_pago INTEGER PRIMARY KEY AUTOINCREMENT, num_tarjeta NUMBER NOT NULL, fecha_caducidad DATE NOT NULL, cvv NUMBER NOT NULL, id INTEGER NOT NULL, FOREIGN KEY(id) REFERENCES usuario(id))";

    //Tabla para Vehículos:
    tablaVehiculo: string = "CREATE TABLE IF NOT EXISTS vehiculo (id_vehiculo INTEGER PRIMARY KEY AUTOINCREMENT, marca VARCHAR(30) NOT NULL, modelo VARCHAR(30) NOT NULL, anio INTEGER NOT NULL, patente VARCHAR(6) NOT NULL, asientos INTEGER NOT NULL, id_usuario INTEGER NOT NULL, id_tipo INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_tipo) REFERENCES tipo(id_tipo));";

    //Tabla para Viajes(Conductor):
    tablaViajes: string = "CREATE TABLE IF NOT EXISTS viaje (id_viaje INTEGER PRIMARY KEY AUTOINCREMENT, f_viaje DATE NOT NULL, hora_salida DATETIME NOT NULL, salida VARCHAR(30) NOT NULL, destino VARCHAR(30) NOT NULL, cant_asientos INTEGER NOT NULL, total INTEGER NOT NULL, valor_asiento INTEGER NOT NULL, estado BOOLEAN NOT NULL, id_vehiculo INTEGER NOT NULL, FOREIGN KEY(id_vehiculo) REFERENCES vehiculo(id_vehiculo));";

    //Tabla para Viajes(Clientes):
    tablaViajesUser: string = "CREATE TABLE IF NOT EXISTS viajeuser(id_viajeuser INTEGER PRIMARY KEY AUTOINCREMENT, f_viaje DATE NOT NULL, hora_salida DATETIME NOT NULL, salida VARCHAR(30) NOT NULL, destino VARCHAR(30) NOT NULL, total INTEGER NOT NULL, id_vehiculo INTEGER, FOREIGN KEY(id_vehiculo) REFERENCES vehiculo(id_vehiculo))";

    //Tabla para detalle de Viajes:
    tablaDetalle: string = "CREATE TABLE IF NOT EXISTS detalle (id_detalle INTEGER PRIMARY KEY AUTOINCREMENT, id_usuario INTEGER NOT NULL, id_viaje INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_viaje) REFERENCES viaje(id_viaje));";

    registroRol: string = "INSERT INTO rol VALUES (1, 'Usuario'), (2, 'Conductor');";

    registroTipoVehiculo: string = "INSERT INTO tipo VALUES (1, 'Standard'), (2, 'Large'), (3, 'Deluxe')"

  //Variable observable para consultar usuarios en la Base de Datos

  listaUsuario = new BehaviorSubject([]);

  listaViajeuser = new BehaviorSubject([]);

  //Variable observable para la manipulación del STATUS de la Base de Datos
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false)
  
  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController, private router: Router) {
    this.crearBD();
  }

  //Funciones para suscribirme al OBSERVABLE
  dbState(){
    return this.isDBReady.asObservable();
  }

  fetchUsuario(): Observable<Usuario[]>{
    return this.listaUsuario.asObservable();
  }

  fetchViajeUser(): Observable<Historialusuario[]>{
    return this.listaViajeuser.asObservable();
  }

  buscarCorreo(correo: string, contrasena: string){
    return this.database.executeSql('SELECT id, id_rol FROM usuario WHERE correo = ? AND contrasena = ?', [correo, contrasena]).then(res => {
      if(res.rows.length > 0){
        return res.rows.item(0);
      } else {
        return null;
      }
    }).catch(error => {
      this.presentAlert("Error al buscar usuario:" + error);
      return false;
    })
  }

  buscarDatosUsuario(id: any){
    return this.database.executeSql("SELECT * FROM usuario WHERE id = ?", [id]).then(res => {
      let datos: Usuario[] = [];

      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          datos.push({
            id: res.rows.item(i).id,
            nombre: res.rows.item(i).nombre,
            apellido: res.rows.item(i).apellido,
            correo: res.rows.item(i).correo,
            fechanacimiento: res.rows.item(i).fechanacimiento,
            rut: res.rows.item(i).rut,
            celular: res.rows.item(i).celular,
            contrasena: res.rows.item(i).contrasena
          })
        }
      }
      return datos;
    })
  }

  buscarViajeuser(){
    return this.database.executeSql("SELECT * FROM viajeuser", []).then(res => {
      let items: Viajeuser[] = [];

      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          items.push({
            id_viajeuser: res.rows.item(i).id_viajeuser,
            f_viaje: res.rows.item(i).f_viaje,
            hora_salida: res.rows.item(i).hora_salida,
            salida: res.rows.item(i).salida,
            destino: res.rows.item(i).destino,
            total: res.rows.item(i).total
          })
        }
      }

      this.listaViajeuser.next(items as any)
    })
  }

  buscarUsuario(){
    return this.database.executeSql("SELECT * FROM usuario", []).then(res => {
      //Almacenamos la consulta en esta variable
      let items: Usuario[] = [];

      //Se recorre la consulta para revisar registros
      if(res.rows.length > 0){
        //Guardar registros en caso de haber datos
        for(var i = 0; i < res.rows.length; i++){
          //Agregamos datos a variable
          items.push({
            id: res.rows.item(i).id,
            nombre: res.rows.item(i).nombre,
            apellido: res.rows.item(i).apellido,
            fechanacimiento: res.rows.item(i).fechanacimiento,
            correo: res.rows.item(i).correo,
            rut: res.rows.item(i).rut,
            celular: res.rows.item(i).celular,
            contrasena: res.rows.item(i).contrasena
          })
        }
      }

      //Actualizamos observable
      this.listaUsuario.next(items as any);
    })
  }

  //Funcion para insertar Usuario
  insertarUsuario(nombre: any, apellido: any, correo: any, fechanacimiento: any, rut: any, celular: any, contrasena: any, id_rol: any){
    return this.database.executeSql("INSERT INTO usuario(nombre, apellido, correo, fechanacimiento, rut, celular, contrasena, id_rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [nombre, apellido, correo, fechanacimiento, rut, celular, contrasena, id_rol]).then(res => {
      if(res){
        this.buscarUsuario();
      } else {
        this.presentAlert("Error al insertar usuario en la base de datos.");
      }
    }).catch(error => {
      console.error('Error al insertar el usuario.', error);
    });
  }

  tomarViaje(f_viaje: any, hora_salida: any, salida: any, destino: any){
    return this.database.executeSql("INSERT INTO viajeuser VALUES(f_viaje, hora_salida, salida, destino) VALUES(?, ?, ?, ?)", [f_viaje, hora_salida, salida, destino]).then(res => {
      if(res){
        this.buscarViajeuser();
      } else {
        this.presentAlert("Error al insertar viaje en la base de datos.");
      }
    }).catch(error => {
      console.error('Error al insertar el viaje.', error);
    })

  }

  actualizarPerfil(nombre:any, apellido:any, correo:any, fechanacimiento:any, rut:any, celular: any, id: any){
    return this.database.executeSql('UPDATE usuario SET nombre = ?, apellido = ?, correo = ?, fechanacimiento = ?, rut = ?, celular = ? WHERE id = ?',[nombre,apellido,correo,fechanacimiento,rut,celular, id]).then(res=>{
      if(res){
        return true;
      } else {
        this.presentAlert("Error al actualizar usuario.");
        return null;
      }
    }).catch(error => {
      console.error('Error al actualizar usuario en base de datos:', error);
    })
  }

  recuperarBuscar(correo: string, rut: string){
    return this.database.executeSql('SELECT * FROM usuario WHERE correo = ? AND rut = ?', [correo, rut]).then(res => {
      if(res.rows.length > 0){
        return res.rows.item(0);
      } else {
        return null;
      }
    })
  }

  recuperarUsuario(contrasena: any, correo: any, rut: any){
    return this.database.executeSql('UPDATE usuario SET contrasena = ? WHERE correo = ? AND rut = ?', [contrasena, correo, rut]).then(res => {
      if(res){
        this.buscarUsuario();
      } else {
        this.presentAlert("Error al actualizar contraseña.");
      }
    }).catch(error => {
      console.error('Error al modificar la contraseña de usuario en la base de datos:', error);
    })
  }

  //Funcion para crear la Base de Datos.
  crearBD(){
    //Verificar si el celular está listo para crear Base de Datos, se crea en el constructor con la variable 'platform'.
    //Manera de capturar excepciones 'try, except' de Python es 'then, catch' en SQLite.
    this.platform.ready().then(() => {

      //Crear la Base de Datos
      this.sqlite.create({
        //Se necesitan 2 elementos

        //Sirve para dar nombre a la base de datos
        name: 'bdviago.bd', //El nombre puede ser cualquiera, pero la terminación debe ser '.db'.
        //Ubicación de la Base de Datos en el celular.
        location: 'default' //Se deja en 'default' de manera predeterminada
      }).then((db: SQLiteObject)=>{

        //Guardamos la conexión en la variable global 'database'.
        this.database = db;

        //Llamar a la funcion que crea las tablas
        this.crearTablas();
      }).catch(e=>{

        //Capturamos y mostramos el error en la creación de la Base de Datos
        this.presentAlert("Error en platform: " + e);
      })
    });
  }

  //Funcion para crear tablas
  async crearTablas(){
    try{
      
      //Ejecutar la creación de tablas
      await this.database.executeSql(this.tablaTipo, []);
      await this.database.executeSql(this.tablaRol, []);
      await this.database.executeSql(this.tablaUsuarios, []);
      await this.database.executeSql(this.tablaVehiculo, []);
      await this.database.executeSql(this.tablaViajes, []);
      await this.database.executeSql(this.tablaDetalle, []);
      await this.database.executeSql(this.tablaViajesUser, []);

      //Ejecutar los registros en la tabla
      await this.database.executeSql(this.registroRol, []);
      await this.database.executeSql(this.registroTipoVehiculo, []);

      //Actualizar el STATUS de la Base de Datos
      this.isDBReady.next(true);

    }catch(e){

      //Capturamos y mostramos el error en la creación de las tablas
      this.presentAlert('Error en Crear Tablas: ' + e)
    }
  }

  async presentAlert(msj: string){
    const alert = await this.alertController.create({
      header: 'Error',
      message: msj,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}