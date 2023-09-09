import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-sesionconductor',
  templateUrl: './sesionconductor.page.html',
  styleUrls: ['./sesionconductor.page.scss'],
})
export class SesionconductorPage implements OnInit {

  formulario: FormGroup;
  user: string = "";

  nombreAdmin: string = "admin";
  contraAdmin: string = "admin12345";

  constructor(public fb: FormBuilder,  public alertController: AlertController, public router: Router) {
    this.formulario = this.fb.group({
      'nombre': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'password': new FormControl("",Validators.required)
    })
   }

  ngOnInit() {
  }
  async ingresar() {
    var f = this.formulario.value;
    var usuarioString = localStorage.getItem('usuario');

    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);
      if (usuario.nombre == f.nombre && usuario.password == f.password) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        this.router.navigate(['/menuprincipal']);
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos ingresados no coinciden.',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    }
  }
}
