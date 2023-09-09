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
      'nombre': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'apellido': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'marca': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'modelo': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      'anio': new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
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
        marca: f.marca,
        modelo: f.modelo,
        anio: f.anio,
        password: f.password
      }

      localStorage.setItem('usuario',JSON.stringify(usuario));

      await alert2.present();
      return;
    }
  }
}
