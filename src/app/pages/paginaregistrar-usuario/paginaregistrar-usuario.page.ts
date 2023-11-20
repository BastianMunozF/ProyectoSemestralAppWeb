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
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginaregistrar-usuario',
  templateUrl: './paginaregistrar-usuario.page.html',
  styleUrls: ['./paginaregistrar-usuario.page.scss'],
})
export class PaginaregistrarUsuarioPage implements OnInit {
  formularioRegistro: FormGroup;
  image: any;
  imageSource: string | undefined;

  constructor(public fb: FormBuilder, public alertController: AlertController, private database: DbserviceService, public router: Router) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-Z]*')]),
      'apellido': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-ZñÑ]*')]),
      'rut': new FormControl("", [Validators.required, Validators.minLength(12), Validators.maxLength(13), Validators.pattern('[0-9K.-]*')]),
      'fechanacimiento': new FormControl("", [Validators.required]),
      'correo': new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.email]),
      'celular': new FormControl("", [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('[0-9]*')]),
      'password': new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9@#$%^&*.,]*')]),
      'confirmacionPassword': new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9.,@#$%^&*.,]*')]),
      'id_rol': new FormControl("", [Validators.required])
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

  guardarUsuario(){
    //Verificar si el formulario es válido
    if (this.formularioRegistro.valid){
      let form = this.formularioRegistro.value;

      //Llamamos a la funcion para insertar al usuario
      this.database.insertarUsuario(form.nombre, form.apellido,form.correo, form.fechanacimiento, form.rut, form.celular, form.password, this.imageSource, form.id_rol).then(res => {

        if(res !== null){
          //Enviamos mensaje a la consola de que el usuario ha sido registrado de manera correcta
          console.log('Usuario registrado correctamente.');
          this.presentarAlerta("Usuario Registrado", "El usuario ha sido registrado correctamente.")
          this.router.navigate(['/paginalogin-usuario'])

          //Limpiamos el formulario después de insertar en la Base de Datos
          this.formularioRegistro.reset();
        } else {
          console.log('Usuario no registrado.')
          this.presentarAlerta("Error al registrar", "Rellene el formulario correctamente.")
        }
      }).catch(error => {
        console.error('Error al insertar el usuario.', error);
      })

    } else {

      //El formulario no es válido mostramos alerta
      this.presentarAlerta("Error", "Rellene el formulario correctamente.");

    }
  }

  contrasenasCoinciden(){
    let comtrasena = this.formularioRegistro.get('password')?.value;
    let confirmacion = this.formularioRegistro.get('confirmacionPassword')?.value

    return comtrasena === confirmacion;
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