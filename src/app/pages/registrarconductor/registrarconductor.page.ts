import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrarconductor',
  templateUrl: './registrarconductor.page.html',
  styleUrls: ['./registrarconductor.page.scss'],
})
export class RegistrarconductorPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('[a-zA-Z]*')]),
      'apellido': new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('[a-zA-Z]*')]),
      'edad': new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('[0-9]*')]),
      'correo': new FormControl("", [Validators.required, Validators.minLength(11), Validators.maxLength(30), Validators.pattern('[a-zA-Z@.#$%!&*,]*')]),
      'rut': new FormControl("", [Validators.required, Validators.minLength(12), Validators.maxLength(13), Validators.pattern('[0-9K.-]*')]),
      'fecnac': new FormControl("", [Validators.required]),
      'celular': new FormControl("", [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('[0-9]*')]),
      'marca': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern('[a-zA-Z0-9]*')]),
      'modelo': new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('[a-zA-Z0-9]*')]),
      'anio': new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')]),
      'patente': new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[A-Z0-9]*')]),
      'password': new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]),
      'confirmacionPassword': new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z0-9]*')])
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
        edad: f.edad,
        correo: f.correo,
        rut: f.rut,
        fecnac: f.fecnac,
        celular: f.celular,
        marca: f.marca,
        modelo: f.modelo,
        anio: f.anio,
        patente: f.patente,
        password: f.password
      }

      localStorage.setItem('usuario',JSON.stringify(usuario));

      await alert2.present();
      return;
    }
  }
}
