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
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'; 

@Component({
  selector: 'app-paginaregistrar-usuario',
  templateUrl: './paginaregistrar-usuario.page.html',
  styleUrls: ['./paginaregistrar-usuario.page.scss'],
})
export class PaginaregistrarUsuarioPage implements OnInit {
  formularioRegistro: FormGroup;
  image: any;
  imageSource: string | undefined;

  constructor(public fb: FormBuilder, public alertController: AlertController, private database: DbserviceService) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-Z]*')]),
      'apellido': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-ZñÑ]*')]),
      'rut': new FormControl("", [Validators.required, Validators.minLength(12), Validators.maxLength(13), Validators.pattern('[0-9K.-]*')]),
      'fechanacimiento': new FormControl("", [Validators.required]),
      'correo': new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.email]),
      'celular': new FormControl("", [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('[0-9]*')]),
      'password': new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9@#$%^&*.,]*')]),
      'confirmacionPassword': new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9.,@#$%^&*.,]*')])
    });
  }

  ngOnInit() {
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });
  }

  /*
  guardarUsuarios(){
    //Verificar si el formulario es válido
    if (this.formularioRegistro.valid){
      let form = this.formularioRegistro.value;

      //Llamamos a la funcion para insertar al usuario
      this.database.insertarUsuario(form.nombre, form.apellido,form.correo, form.fechanacimiento, form.rut, form.celular, form.contrasena).then(res => {

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
  */

  async guardarUsuario(){
    if(this.formularioRegistro.valid){
      let usuario = this.formularioRegistro.value;

      return this.database.insertarUsuario(usuario.nombre, usuario.apellido, usuario.correo, usuario.fechanacimiento, usuario.rut, usuario.celular, usuario.contrasena);
    } else {
      this.presentarAlerta("Error al registrar", "Algunos de los campos no son correctos.")
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