import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  formularioPago: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {

    this.formularioPago = this.fb.group({
      'cardnumber': new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]),
      'cardname': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30), Validators.pattern('[A-Z]*')]),
      'cvv': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.min(999), Validators.max(999)])
    });
  }

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
