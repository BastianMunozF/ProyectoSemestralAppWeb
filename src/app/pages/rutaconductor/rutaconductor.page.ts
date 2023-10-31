import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rutaconductor',
  templateUrl: './rutaconductor.page.html',
  styleUrls: ['./rutaconductor.page.scss'],
})
export class RutaconductorPage implements OnInit {
  usuarioR: string = "";
  claveR: string = "";
  variableStorage: any = "";
  formularioRuta: FormGroup;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private alertController: AlertController, private formBuilder: FormBuilder) {
    this.formularioRuta = this.formBuilder.group({
      'f_viaje': new FormControl("", [Validators.required]),
      'hora_salida': new FormControl("", [Validators.required]),
      'salida': new FormControl("", [Validators.required]),
      'destino': new FormControl("", [Validators.required]),
      'cant_asientos': new FormControl("", [Validators.required]),
      'total': new FormControl("", [Validators.required]),
      'valor_asiento': new FormControl("", [Validators.required]),
      'estado': new FormControl("", [Validators.required])
      
    });
  }

  ngOnInit() {
    this.variableStorage = localStorage.getItem('token');
  }

  crearRuta(){
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
