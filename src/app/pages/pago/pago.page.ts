import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  formularioPago: FormGroup;
  months = [
    { value: '01', display: '01' },
    { value: '02', display: '02' },
    { value: '03', display: '03' },
    { value: '04', display: '04' },
    { value: '05', display: '05' },
    { value: '06', display: '06' },
    { value: '07', display: '07' },
    { value: '08', display: '08' },
    { value: '09', display: '09' },
    { value: '10', display: '10' },
    { value: '11', display: '11' },
    { value: '12', display: '12' }
  ];
  years = [
    { value: '2024', display: '2024' },
    { value: '2025', display: '2025' },
    { value: '2026', display: '2026' },
    { value: '2027', display: '2027' },
    { value: '2028', display: '2028' },
    { value: '2029', display: '2029' },
    { value: '2030', display: '2030' },
    { value: '2031', display: '2031' },
    { value: '2032', display: '2032' }
  ];

  constructor(public fb: FormBuilder, public alertController: AlertController, private router: Router) {
    this.formularioPago = this.fb.group({
      'cardnumber': ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      'cardname': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')]],
      'expMonth': ['', Validators.required],
      'expYear': ['', Validators.required],
      'cvv': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
  }

  ngOnInit() {
  }

  async realizarPago() {
    if (this.formularioPago.valid) {
      // Lógica para enviar los datos de pago a la API de Flow
      const formData = this.formularioPago.value;
      const expDate = `${formData.expYear}-${formData.expMonth}`;

      // Aquí deberías llamar a la API de Flow para procesar el pago con los datos del formulario
      // y luego redirigir según la respuesta de la API

      // Ejemplo de redirección (debería ser reemplazado con la lógica real de pago)
      this.presentarAlerta('Procesando Pago', 'Redireccionando a la pasarela de pago...');

      // Redireccionar a la página de confirmación o pasarela de pago real
      // this.router.navigate(['/pago-confirmacion']); // Ejemplo de redirección
    } else {
      this.presentarAlerta('Datos Incompletos', 'Por favor complete todos los campos correctamente.');
    }
  }

  async presentarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
