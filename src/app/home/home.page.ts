import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user1: string = "";
  password1: string = "";
  nombreUsuario: string = "Vicente";

  constructor(private router: Router, private alertController: AlertController, private toastController: ToastController) {}

  inicioSesion(){
    let navigationExtras: NavigationExtras = {
      state: {
        userEnviado: this.user1,
        claveEnviada: this.password1
      }
    }
    this.alertaInicioSesion('top');
    this.router.navigate(['/paginainicioConductor'], navigationExtras);
  }

  async alertaInicioSesion(position: 'top' | 'middle' | 'bottom'){
    const toast = await this.toastController.create({
      message: 'Inicio de Sesión satisfactorio.',
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }

}
