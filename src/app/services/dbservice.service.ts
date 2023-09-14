import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { error } from 'console';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DbserviceService {

  //Variable para manipular la conexión a la Base de Datos.
  public database!: SQLiteObject

  //Variables para la creación de tablas.

    //Tabla para Conductores:
    tablaConductor: string = "CREATE TABLE IF NOS EXIST conductor(id INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(30) NOT NULL, apellido VARCHAR(30) NOT NULL, edad NUMBER NOT NULL, correo VARCHAR(30) NOT NULL, rut VARCHAR(13) NOT NULL, fechanacimiento DATE NOT NULL, celular NUMBER NOT NULL, marca VARCHAR(15) NOT NULL, modelo VARCHAR(30) NOT NULL, anio NUMBER NOT NULL, patente VARCHAR(6) NOT NULL, contrasena VARCHAR(30) NOT NULL, confcontrasena VARCHAR(30) NOT NULL);";

    //Variable INSERT para un registro inicial:
    registroConductor: string = "INSERT or IGNORE INTO conductor(id, nombre, apellido, edad, correo, rut, fechanacimiento, celular, marca, modelo, anio, patente, contrasena, confcontrasena) VALUES (1, 'Bastian', 'Munoz', 20, 'basti.munoz.f@gmail.com', '21.235.705-7', '02/18/2003', 959044934, 'Ford', 'Mustang', 1976, 'XH6640', 'Basti123', 'Basti123');";

  //Variable observable para consultar en la Base de Datos
  listaConductor = new BehaviorSubject([]);

  //Variable observable para la manipulación del STATUS de la Base de Datos
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false)
  
  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController) {
    this.crearBD();
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
        name: 'bdconductores.bd', //El nombre puede ser cualquiera, pero la terminación debe ser '.db'.

        //Ubicación de la Base de Datos en el celular.
        location: 'default' //Se deja en 'default' de manera predeterminada
      }).then((db: SQLiteObject)=>{

        //Guardamos la conexión en la variable global 'database'.
        this.database = db;

        //Llamar a la funcion que crea las tablas
        this.crearTablas();
      }).catch(e=>{
        
        //Capturamos y mostramos el error en la creación de la Base de Datos
        this.presentAlert("Error en la base de datos: " + e);
      })
    })
  }

  //Funcion para crear tablas
  async crearTablas(){
    try{
      
      //Ejecutar la creación de tablas
      await this.database.executeSql(this.tablaConductor, []);

      //Ejecutar los registros en la tabla
      await this.database.executeSql(this.registroConductor, []);

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
      message: 'Se ha encontrado un error.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}