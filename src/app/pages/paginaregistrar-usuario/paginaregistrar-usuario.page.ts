import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-paginaregistrar-usuario',
  templateUrl: './paginaregistrar-usuario.page.html',
  styleUrls: ['./paginaregistrar-usuario.page.scss'],
})
export class PaginaregistrarUsuarioPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-Z]*')]),
      'apellido': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-Z]*')]),
      'rut': new FormControl("", [Validators.required, Validators.minLength(12), Validators.maxLength(13), Validators.pattern('[0-9K.-]*')]),
      'edad': new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('[0-9]*'), Validators.min(12)]),
      'correo': new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern('[a-zA-Z@.#$%]*'), Validators.email]),
      'celular': new FormControl("", [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('[0-9]*')]),
      'password': new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern('[a-z]'), Validators.pattern('[A-Z]'), Validators.pattern('[0-9]'), Validators.pattern('[!@#$%^&*()-=+_]')]),
      'confirmacionPassword': new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(50), Validators.pattern('[a-z]'), Validators.pattern('[A-Z]'), Validators.pattern('[0-9]'), Validators.pattern('[!@#$%^&*()-=+_]')])
    });

  }

  ngOnInit() {
  }

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
}
