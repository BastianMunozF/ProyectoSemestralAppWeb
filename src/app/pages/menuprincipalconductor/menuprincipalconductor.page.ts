import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menuprincipalconductor',
  templateUrl: './menuprincipalconductor.page.html',
  styleUrls: ['./menuprincipalconductor.page.scss'],
})
export class MenuprincipalconductorPage implements OnInit {

  constructor(private database: DbserviceService, private alertController: AlertController) { }

  ngOnInit() {
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
