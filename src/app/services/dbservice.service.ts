import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Vehiculo } from './vehiculo';
import { Viaje } from './viaje';
import { Detalle } from './detalle';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

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
    tablaUsuarios: string = "CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(30) NOT NULL, apellido VARCHAR(30) NOT NULL, correo VARCHAR(30) NOT NULL, fechanacimiento DATE NOT NULL, rut VARCHAR(13) NOT NULL, celular INTEGER NOT NULL, contrasena VARCHAR(30) NOT NULL, fotoperfil VARCHAR(100) NOT NULL, id_rol INTEGER NOT NULL, FOREIGN KEY(id_rol) REFERENCES rol(id_rol));";

    //Tabla para Vehículos:
    tablaVehiculo: string = "CREATE TABLE IF NOT EXISTS vehiculo (id_vehiculo INTEGER PRIMARY KEY AUTOINCREMENT, marca VARCHAR(30) NOT NULL, modelo VARCHAR(30) NOT NULL, anio INTEGER NOT NULL, patente VARCHAR(6) NOT NULL, asientos INTEGER NOT NULL, id_usuario INTEGER NOT NULL, id_tipo INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_tipo) REFERENCES tipo(id_tipo));";

    //Tabla para Viajes(Conductor):
    tablaViajes: string = "CREATE TABLE IF NOT EXISTS viaje (id_viaje INTEGER PRIMARY KEY AUTOINCREMENT, f_viaje DATE NOT NULL, hora_salida DATETIME NOT NULL, salida VARCHAR(30) NOT NULL, destino VARCHAR(30) NOT NULL, cant_asientos INTEGER NOT NULL, valor_asiento INTEGER NOT NULL, estado VARCHAR(20) NOT NULL, id_conductor INTEGER NOT NULL, FOREIGN KEY(id_conductor) REFERENCES usuario(id));";

    //Tabla para Viajes(Clientes):
    tablaViajesUser: string = "CREATE TABLE IF NOT EXISTS viajeuser(id_viajeuser INTEGER PRIMARY KEY AUTOINCREMENT, f_viaje DATE NOT NULL, hora_salida DATETIME NOT NULL, salida VARCHAR(30) NOT NULL, destino VARCHAR(30) NOT NULL)";

    //Tabla para detalle de Viajes:
    tablaDetalle: string = "CREATE TABLE IF NOT EXISTS detalle (id_detalle INTEGER PRIMARY KEY AUTOINCREMENT, id_usuario INTEGER NOT NULL, id_viaje INTEGER NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id), FOREIGN KEY(id_viaje) REFERENCES viaje(id_viaje));";

    registroRol: string = "INSERT INTO rol VALUES (1, 'Usuario'), (2, 'Conductor');";

    registroTipoVehiculo: string = "INSERT INTO tipo VALUES (1, 'Standard'), (2, 'Large'), (3, 'Deluxe')"

  //Variable observable para consultar usuarios en la Base de Datos

  listaUsuario = new BehaviorSubject([]);

  listaUsuarioViaje = new BehaviorSubject([]);

  listaConductor = new BehaviorSubject([]);

  listaViaje = new BehaviorSubject([]);

  listaViajeId = new BehaviorSubject([]);

  listaViajeUser = new BehaviorSubject([]);

  listaViajeIniciado = new BehaviorSubject([]);

  listaViajeCreadoUser = new BehaviorSubject([]);

  listaVehiculo = new BehaviorSubject([]);

  listaVehiculoUser = new BehaviorSubject([]);

  listaViajeReservado = new BehaviorSubject([]);

  listaUsuarioId = new BehaviorSubject([]);

  listaDetalle = new BehaviorSubject([]);

  listaDetalleId = new BehaviorSubject([]);

  listaDetalleUser = new BehaviorSubject([]);

  listaDetalleViaje = new BehaviorSubject([]);

  listaDetalleViajeUserId = new BehaviorSubject([]);

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

  fetchConductor(): Observable<Usuario[]>{
    return this.listaConductor.asObservable();
  }

  fetchUsuarioViaje(): Observable<Usuario[]>{
    return this.listaUsuarioViaje.asObservable();
  }

  fetchVehiculo(): Observable<Vehiculo[]>{
    return this.listaVehiculo.asObservable();
  } 

  fetchViaje(): Observable<Viaje[]>{
    return this.listaViaje.asObservable();
  }

  fetchViajeId(): Observable<Viaje[]>{
    return this.listaViajeId.asObservable();
  }

  fetchViajeUser(): Observable<Viaje[]>{
    return this.listaViajeUser.asObservable();
  }

  fetchViajeAceptado(): Observable<Viaje[]>{
    return this.listaViajeIniciado.asObservable();
  }

  fetchViajeCreadoUser(): Observable<Viaje[]>{
    return this.listaViajeCreadoUser.asObservable();
  }

  fetchViajeReservado(): Observable<Viaje[]>{
    return this.listaViajeReservado.asObservable();
  }

  fetchUsuarioId(): Observable<Usuario[]>{
    return this.listaUsuarioId.asObservable();
  }

  fetchVehiculoUser(): Observable<Vehiculo[]>{
    return this.listaVehiculoUser.asObservable();
  }

  fetchDetalle(): Observable<Detalle[]>{
    return this.listaDetalle.asObservable();
  }

  fetchDetalleId(): Observable<Detalle[]>{
    return this.listaDetalleId.asObservable();
  }

  fetchDetalleUser(): Observable<Detalle[]>{
    return this.listaDetalleUser.asObservable();
  }

  fetchDetalleViaje(): Observable<Detalle[]>{
    return this.listaDetalleViaje.asObservable();
  }

  fetchDetalleViajeUserId(): Observable<Detalle[]>{
    return this.listaDetalleViajeUserId.asObservable();
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
    if (!this.database){
      console.error('La base de datos no está inicializada.');
    return Promise.resolve([]);
    }
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
            contrasena: res.rows.item(i).contrasena,
            fotoperfil: res.rows.item(i).fotoperfil
          })
        }
      }

      this.listaUsuarioId.next(datos as any);
      return datos;

    })
  }

  buscarDatosConductor(id: any){
    if (!this.database){
      console.error('La base de datos no está inicializada.');
    return Promise.resolve([]);
    }
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
            contrasena: res.rows.item(i).contrasena,
            fotoperfil: res.rows.item(i).fotoperfil
          })
        }
      }

      this.listaConductor.next(datos as any);
      return datos;

    })
  }

  buscarUsuarioViaje(id: any){
    if (!this.database){
      console.error('La base de datos no está inicializada.');
    return Promise.resolve([]);
    }
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
            contrasena: res.rows.item(i).contrasena,
            fotoperfil: res.rows.item(i).fotoperfil
          })
        }
      }

      this.listaUsuarioViaje.next(datos as any);
      return datos;

    });
  }

  buscarVehiculoUsuario(id: any){
    if (!this.database) {
      console.error('Error: this.database no está definido.');
      return Promise.resolve([]);
    }
    return this.database.executeSql("SELECT * FROM vehiculo WHERE id_usuario = ?", [id]).then(res => {
      let datos: Vehiculo[] = [];

      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          datos.push({
            id_vehiculo: res.rows.item(i).id_vehiculo,
            marca: res.rows.item(i).marca,
            modelo: res.rows.item(i).modelo,
            anio: res.rows.item(i).anio,
            patente: res.rows.item(i).patente,
            asientos: res.rows.item(i).asientos,
            id_usuario: res.rows.item(i).id_usuario,
            id_tipo: res.rows.item(i).id_tipo
          });
        }
      }
      this.listaVehiculoUser.next(datos as any);
      return datos;
    });
  }

  buscarViajeUser(id: any){
    if (!this.database) {
      console.error('Error: this.database no está definido o no se ha inicializado correctamente.');
      return Promise.resolve([]);
    }
    return this.database.executeSql("SELECT * FROM viaje WHERE id_conductor = ?", [id]).then(res => {
      let datos: Viaje[] = [];

      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          datos.push({
            id_viaje: res.rows.item(i).id_viaje,
            f_viaje: res.rows.item(i).f_viaje,
            hora_salida: res.rows.item(i).hora_salida,
            salida: res.rows.item(i).salida,
            destino: res.rows.item(i).destino,
            cant_asientos: res.rows.item(i).cant_asientos,
            valor_asiento: res.rows.item(i).valor_asiento,
            estado: res.rows.item(i).estado,
            id_usuario: res.rows.item(i).id_usuario
          })
        }
      }
      this.listaViajeUser.next(datos as any);
      return datos;
    });
  }

  buscarViajeCreadoUser(id: any, estado: any){
    if (!this.database) {
      console.error('Error: this.database no está definido o no se ha inicializado correctamente.');
      return Promise.resolve([]);
    }
    return this.database.executeSql("SELECT * FROM viaje WHERE id_conductor = ? AND estado = ?", [id, estado]).then(res => {
      let datos: Viaje[] = [];

      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          datos.push({
            id_viaje: res.rows.item(i).id_viaje,
            f_viaje: res.rows.item(i).f_viaje,
            hora_salida: res.rows.item(i).hora_salida,
            salida: res.rows.item(i).salida,
            destino: res.rows.item(i).destino,
            cant_asientos: res.rows.item(i).cant_asientos,
            valor_asiento: res.rows.item(i).valor_asiento,
            estado: res.rows.item(i).estado,
            id_usuario: res.rows.item(i).id_usuario
          })
        }
      }
      this.listaViajeCreadoUser.next(datos as any);
      return datos;
    })
  }

  buscarDetalleUsuario(id_usuario: any, id_viaje: any){
    if (!this.database) {
      console.error('Error: this.database no está definido.');
      return Promise.resolve([]);
    }
    if (!this.database) {
      console.error('Error: this.database no está definido.');
      return Promise.resolve([]);
    }
    return this.database.executeSql("SELECT * FROM detalle WHERE id_usuario = ? AND id_viaje = ?", [id_usuario, id_viaje]).then(res => {
      let detalles: Detalle[] = [];

      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          detalles.push({
            id_detalle: res.rows.item(i).id_detalle,
            id_usuario: res.rows.item(i).id_usuario,
            id_viaje: res.rows.item(i).id_viaje,
          })
        }
      }
      this.listaDetalleViajeUserId.next(detalles as any);
      return detalles;
    });
  }

  buscarDetalleUser(id_usuario: any){
    if (!this.database) {
      console.error('Error: this.database no está definido.');
      return Promise.resolve([]);
    }
    return this.database.executeSql('SELECT * FROM detalle WHERE id_usuario = ?', [id_usuario]).then(res => {
      let detalles: Detalle[] = [];

      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          detalles.push({
            id_detalle: res.rows.item(i).id_detalle,
            id_usuario: res.rows.item(i).id_usuario,
            id_viaje: res.rows.item(i).id_viaje,
          })
        }
      }
      this.listaDetalleUser.next(detalles as any);
      return detalles;
    })
  }

  buscarDetalleViaje(id_viaje: any){
    if (!this.database) {
      console.error('Error: this.database no está definido.');
      return Promise.resolve([]);
    }
    return this.database.executeSql('SELECT * FROM detalle WHERE id_viaje = ?', [id_viaje]).then(res => {
      let detalles: Detalle[] = [];

      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          detalles.push({
            id_detalle: res.rows.item(i).id_detalle,
            id_usuario: res.rows.item(i).id_usuario,
            id_viaje: res.rows.item(i).id_viaje,
          })
        }
      }
      this.listaDetalleViaje.next(detalles as any);
      return detalles;
    })
  }

  buscarViajeUserAceptado(id_usuario: any, id_viaje: any){
    if (!this.database) {
      console.error('Error: this.database no está definido.');
      return Promise.resolve([]);
    }

    return this.database.executeSql('SELECT * FROM detalle WHERE id_usuario = ? AND id_viaje = ?', [id_usuario, id_viaje]).then(res => {
      let detalles: Detalle[] = [];

      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          detalles.push({
            id_detalle: res.rows.item(i).id_detalle,
            id_usuario: res.rows.item(i).id_usuario,
            id_viaje: res.rows.item(i).id_viaje,
          })
        }
      }
      this.listaDetalleViajeUserId.next(detalles as any);
      return detalles;
    });
  }

  buscarViajeId(id_viaje: any){
    if (!this.database) {
      console.error('La base de datos no está inicializada.');
      return Promise.resolve([]); // O cualquier valor predeterminado que desees devolver
    }
    return this.database.executeSql('SELECT * FROM viaje WHERE id_viaje = ?', [id_viaje]).then(res => {
      let viaje: Viaje[] = [];

      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          viaje.push({
            id_viaje: res.rows.item(i).id_viaje,
            f_viaje: res.rows.item(i).f_viaje,
            hora_salida: res.rows.item(i).hora_salida,
            salida: res.rows.item(i).salida,
            destino: res.rows.item(i).destino,
            cant_asientos: res.rows.item(i).cant_asientos,
            valor_asiento: res.rows.item(i).valor_asiento,
            estado: res.rows.item(i).estado,
            id_usuario: res.rows.item(i).id_conductor
          })
        }
      }

      this.listaViajeId.next(viaje as any);
      return viaje;

    });
  }

  buscarViajeAceptado(estado: any){
    if (!this.database) {
      console.error('La base de datos no está inicializada.');
      return Promise.resolve([]); // O cualquier valor predeterminado que desees devolver
    }
    return this.database.executeSql('SELECT * FROM viaje WHERE estado = ?', [estado]).then(res => {
      let viaje: Viaje[] = [];

      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          viaje.push({
            id_viaje: res.rows.item(i).id_viaje,
            f_viaje: res.rows.item(i).f_viaje,
            hora_salida: res.rows.item(i).hora_salida,
            salida: res.rows.item(i).salida,
            destino: res.rows.item(i).destino,
            cant_asientos: res.rows.item(i).cant_asientos,
            valor_asiento: res.rows.item(i).valor_asiento,
            estado: res.rows.item(i).estado,
            id_usuario: res.rows.item(i).id_usuario,
          })
        }
      }

      return viaje;

    })
  }

  buscarViajeReservado(id_viaje: any, estado: any){
    if (!this.database) {
      console.error('La base de datos no está inicializada.');
      return Promise.resolve([]); // O cualquier valor predeterminado que desees devolver
    }
    return this.database.executeSql('SELECT * FROM viaje WHERE id_viaje = ? AND estado = ?', [id_viaje, estado]).then(res => {
      let viaje: Viaje[] = [];

      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          viaje.push({
            id_viaje: res.rows.item(i).id_viaje,
            f_viaje: res.rows.item(i).f_viaje,
            hora_salida: res.rows.item(i).hora_salida,
            salida: res.rows.item(i).salida,
            destino: res.rows.item(i).destino,
            cant_asientos: res.rows.item(i).cant_asientos,
            valor_asiento: res.rows.item(i).valor_asiento,
            estado: res.rows.item(i).estado,
            id_usuario: res.rows.item(i).id_conductor,
          })
        }
      }

      this.listaViajeReservado.next(viaje as any);
      return viaje;

    })
  }

  buscarViaje(estado: any){
    if (!this.database) {
      console.error('La base de datos no está inicializada.');
      return Promise.resolve([]); // O cualquier valor predeterminado que desees devolver
    }
    return this.database.executeSql("SELECT * FROM viaje WHERE estado = ?", [estado]).then(res => {
      let items: Viaje[] = [];

      if(res.rows.length > 0){
        for(var i=0; i<res.rows.length; i++){
          items.push({
            id_viaje: res.rows.item(i).id_viaje,
            f_viaje: res.rows.item(i).f_viaje,
            hora_salida: res.rows.item(i).hora_salida,
            salida: res.rows.item(i).salida,
            destino: res.rows.item(i).destino,
            cant_asientos: res.rows.item(i).cant_asientos,
            valor_asiento: res.rows.item(i).valor_asiento,
            estado: res.rows.item(i).estado,
            id_usuario: res.rows.item(i).id_conductor
          })
        }
      }
      this.listaViaje.next(items as any);
      return items;
    });
  }

  buscarViajeIniciado(id_conductor: any, estado: any){
    if (!this.database) {
      console.error('La base de datos no está inicializada.');
      return Promise.resolve([]); // O cualquier valor predeterminado que desees devolver
    }

    return this.database.executeSql("SELECT * FROM viaje WHERE id_conductor = ? AND estado = ?", [id_conductor, estado]).then(res => {
      let viaje: Viaje[] = [];

      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          viaje.push({
            id_viaje: res.rows.item(i).id_viaje,
            f_viaje: res.rows.item(i).f_viaje,
            hora_salida: res.rows.item(i).hora_salida,
            salida: res.rows.item(i).salida,
            destino: res.rows.item(i).destino,
            cant_asientos: res.rows.item(i).cant_asientos,
            valor_asiento: res.rows.item(i).valor_asiento,
            estado: res.rows.item(i).estado,
            id_usuario: res.rows.item(i).id_conductor
          })
        }
      }
      this.listaViajeIniciado.next(viaje as any);
      return viaje;
    })
  }

  buscarDetalle(){
    return this.database.executeSql("SELECT * FROM detalle", []).then(res => {
      let detalle: Detalle[] = [];

      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          detalle.push({
            id_detalle: res.rows.item(i).id_detalle,
            id_usuario: res.rows.item(i).id_usuario,
            id_viaje: res.rows.item(i).id_viaje,
          })
        }
      }

      this.listaDetalle.next(detalle as any);
      return detalle;
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
            contrasena: res.rows.item(i).contrasena,
            fotoperfil: res.rows.item(i).fotoperfil
          })
        }
      }

      //Actualizamos observable
      this.listaUsuario.next(items as any);
    })
  }

  buscarVehiculo(){
    return this.database.executeSql("SELECT * FROM vehiculo", []).then(res => {
      let items: Vehiculo[] = [];

      if(res.rows.length > 0){
        for(var i = 0; i < res.rows.length; i++){
          items.push({
            id_vehiculo: res.rows.item(i).id_vehiculo,
            marca: res.rows.item(i).marca,
            modelo: res.rows.item(i).modelo,
            anio: res.rows.item(i).anio,
            patente: res.rows.item(i).patente,
            asientos: res.rows.item(i).asientos,
            id_usuario: res.rows.item(i).id_usuario,
            id_tipo: res.rows.item(i).id_tipo
          })
        }
      }
      this.listaVehiculo.next(items as any);
    })
  }

  //Funcion para insertar Usuario
  insertarUsuario(nombre: any, apellido: any, correo: any, fechanacimiento: any, rut: any, celular: any, contrasena: any, fotoperfil: any, id_rol: any){
    return this.database.executeSql("INSERT INTO usuario(nombre, apellido, correo, fechanacimiento, rut, celular, contrasena, fotoperfil, id_rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [nombre, apellido, correo, fechanacimiento, rut, celular, contrasena, fotoperfil, id_rol]).then(res => {
      if(res){
        return true;
      } else {
        this.presentAlert("Error al insertar usuario en la base de datos.");
        return null;
      }
    }).catch(error => {
      console.error('Error al insertar el usuario.', error);
    });
  }

  insertarVehiculo(marca: any, modelo: any, anio: any, patente: any, asientos: any, id_usuario: any, id_tipo: any){
    return this.database.executeSql("INSERT INTO vehiculo(marca, modelo, anio, patente, asientos, id_usuario, id_tipo) VALUES (?, ?, ?, ?, ?, ?, ?)", [marca, modelo, anio, patente, asientos, id_usuario, id_tipo]).then(res => {
      if(res){
        this.buscarVehiculo();
      } else {
        this.presentAlert("Error al insertar vehículo en la base de datos.");
      }
    }).catch(error => {
      console.error('Error al insertar el vehículo.', error)
    })
  }

  insertarRutaC(f_viaje: any, hora_salida: any, salida: any, destino: any, cant_asientos: any, valor_asiento: any, estado: any, id_conductor: any){
    return this.database.executeSql("INSERT INTO viaje(f_viaje, hora_salida, salida, destino, cant_asientos, valor_asiento, estado, id_conductor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [f_viaje, hora_salida, salida, destino, cant_asientos, valor_asiento, estado, id_conductor]).then(res => {
      if(res){
        this.buscarViaje(estado);
      } else {
        this.presentAlert('Error al insertar ruta.')
      }
    }).catch(error => {
      console.error('Error al insertar el vehículo:', error)
    })
  }

  insertarViajeAceptado(id_usuario: any, id_viaje: any){
    return this.database.executeSql("INSERT INTO detalle(id_usuario, id_viaje) VALUES (?, ?)", [id_usuario, id_viaje]).then(res => {
      if(res){
        this.buscarDetalleUser(id_usuario);
        return true;
      } else {
        this.presentAlert('Error al insertar detalle');
        return null;
      }
    });
  }

  eliminarViajeUser(id_viaje: any){
    return this.database.executeSql("DELETE FROM viaje WHERE id_viaje = ?", [id_viaje]).then(res => {
      if(res){

        return true;

      } else {

        console.log("Error al eliminar el viaje del usuario.");

        return null;

      }
    }).catch(e => {
      console.error('Error al eliminar viaje:', e);
    })
  }

  cancelarReservaUser(id_usuario: any, id_viaje: any){
    return this.database.executeSql("DELETE FROM detalle WHERE id_usuario = ? AND id_viaje = ?", [id_usuario, id_viaje]).then(res => {
      if(res){

        this.buscarDetalleUser(id_usuario);
        return true;

      } else {

        return null;

      }
    })
  }

  verificarViaje(id_conductor: any){
    if (!this.database) {
      console.error('La base de datos no está inicializada.');
      return Promise.resolve([]); // O cualquier valor predeterminado que desees devolver
    }
    return this.database.executeSql("SELECT * FROM viaje WHERE id_conductor = ?", [id_conductor]).then(res => {
      if(res){

        return true;

      } else {

        this.presentAlert("Error al verificar el viaje.");

        return null;

      }
    })
  }

  actualizarPerfil(nombre: any, apellido: any, correo: any, fechanacimiento: any, rut: any, celular: any, foto: any, id: any){
    return this.database.executeSql('UPDATE usuario SET nombre = ?, apellido = ?, correo = ?, fechanacimiento = ?, rut = ?, celular = ?, fotoperfil = ? WHERE id = ?',[nombre, apellido, correo, fechanacimiento, rut, celular, foto, id]).then(res=>{
      if(res){

        let id = localStorage.getItem('id');
        this.buscarDatosUsuario(id);
        return true;

      } else {

        this.presentAlert("Error al actualizar usuario.");

        return null;

      }
    }).catch(error => {

      console.error('Error al actualizar usuario en base de datos:', error);

    });
  }

  actualizarVehiculo(marca: any, modelo: any, anio: any, patente: any, asientos: any, id: any){
    return this.database.executeSql('UPDATE vehiculo SET marca = ?, modelo = ?, anio = ?, patente = ?, asientos = ? WHERE id_usuario = ?', [marca, modelo, anio, patente, asientos, id]).then(res => {
      if(res){

        return true;

      } else {

        return null;

      }
    })
  }

  actualizarContrasena(contrasena: any, id: any){
    return this.database.executeSql('UPDATE usuario SET contrasena = ? WHERE id = ?', [contrasena, id]).then(res => {
      if(res){
        return true;
      } else {
        this.presentAlert("Error al actualizar contraseña.");
        return null;
      }
    })
  }

  actualizarEstadoViaje(asientos: any, id_viaje: any){
    return this.database.executeSql('UPDATE viaje SET cant_asientos = ? WHERE id_viaje = ?', [asientos, id_viaje]).then(res => {
      if(res){
        return true;
      } else {
        this.presentAlert("Error al actualizar estado de viaje.");
        return null;
      }
    });
  }

  actualizarViaje(estado: any, id_viaje: any){
    return this.database.executeSql('UPDATE viaje SET estado = ? WHERE id_viaje = ?', [estado, id_viaje]).then(res => {
      if(res){

        return true;

      } else {

        this.presentAlert("Error al actualizar estado del viaje.");
        return null;

      }
    })
  }

  verificarContrasena(id: any){
    return this.database.executeSql('SELECT contrasena FROM usuario WHERE id = ?', [id]).then(res => {
      if(res){
        return true;
      } else {
        return null;
      }
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
        return true;
      } else {
        this.presentAlert("Error al actualizar contraseña.");
        return null;
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