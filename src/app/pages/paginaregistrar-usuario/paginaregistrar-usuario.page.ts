import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-paginaregistrar-usuario',
  templateUrl: './paginaregistrar-usuario.page.html',
  styleUrls: ['./paginaregistrar-usuario.page.scss'],
})
export class PaginaregistrarUsuarioPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, private database: DbserviceService) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-Z]*')]),
      'apellido': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-ZñÑ]*')]),
      'rut': new FormControl("", [Validators.required, Validators.minLength(12), Validators.maxLength(13), Validators.pattern('[0-9K.-]*')]),
      'edad': new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('[0-9]*'), Validators.min(12)]),
      'correo': new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.email]),
      'celular': new FormControl("", [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('[0-9]*')]),
      'password': new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9@#$%^&*.,]*')]),
      'confirmacionPassword': new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9.,@#$%^&*.,]*')])
    });
  }

  ngOnInit() {
  }

  guardarUsuario(){
    //Verificar si el formulario es válido
    if (this.formularioRegistro.valid){
      let form = this.formularioRegistro.value;

      //Obtener datos del formulario
      let nombre = form.nombre;
      let apellido = form.apellido;
      let edad = form.edad;
      let correo = form.correo;
      let rut = form.rut;
      let fechanacimiento = form.fechanacimiento;
      let celular = form.celular;
      let contrasena = form.password;

      //Creamos base de datos y creamos tablas con las funciones correspondientes
      this.database.crearBD();

      //Llamamos a la funcion para insertar al usuario
      this.database.insertarUsuario(nombre, apellido, edad, correo, rut, fechanacimiento, celular, contrasena).then(res => {

        //Enviamos mensaje a la consola de que el usuario ha sido registrado de manera correcta
        console.log('Usuario registrado correctamente.');

        //Limpiamos el formulario después de insertar en la Base de Datos
        this.formularioRegistro.reset();
      }).catch(error => {
        console.error('Error al insertar el usuario.', error);
      })
    } else {

      //El formulario no es válido mostramos alerta
      this.presentarAlerta("Error", "Rellene el formulario correctamente.");
    }
  }

  async presentarAlerta(titulo: string, mensaje: string){
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
/*
  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;

    }

    if(this.formularioRegistro.valid){
      const alert2 = await this.alertController.create({
        header: 'Usuario Registrado',
        message: 'Su usuario ha sido registrado exitosamente.',
        buttons: ['Aceptar']
      });

      var usuario = {
        nombre: f.nombre,
        apellido: f.apellido,
        rut: f.rut,
        edad: f.edad,
        correo: f.correo,
        celular: f.celular,
        password: f.password
      }

      localStorage.setItem('usuario',JSON.stringify(usuario));

      await alert2.present();
      return;
    }
  }
*/