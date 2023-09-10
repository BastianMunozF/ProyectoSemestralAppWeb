import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-rutaconductor',
  templateUrl: './rutaconductor.page.html',
  styleUrls: ['./rutaconductor.page.scss'],
})
export class RutaconductorPage implements OnInit {
  usuarioR: string = "";
  claveR: string = "";
  variableStorage: any = "";

  constructor(private router: Router, private activeRoute: ActivatedRoute, private alertController: AlertController) {
    this.activeRoute.queryParams.subscribe(param => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.claveR = this.router.getCurrentNavigation()?.extras?.state?.['']
        this.usuarioR = this.router.getCurrentNavigation()?.extras?.state?.['']
      }
    })
   }

  ngOnInit() {
    this.variableStorage = localStorage.getItem('token');
  }

  async alertaViaje(){
    const alert = await this.alertController.create({
      header: 'Viaje Comenzado',
      message: 'El viaje ha sido confirmado.',
      buttons: ['Aceptar']
    })

    await alert.present();
  }

}
