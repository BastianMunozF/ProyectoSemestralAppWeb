import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard, IonCardContent } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tomarviaje',
  templateUrl: './tomarviaje.page.html',
  styleUrls: ['./tomarviaje.page.scss'],
})
export class TomarviajePage implements OnInit {
  formularioViaje: FormGroup;

  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  constructor(private formBuilder: FormBuilder, private database: DbserviceService, private alertController: AlertController) {
    this.formularioViaje = this.formBuilder.group({
      'f_viaje': new FormControl("", [Validators.required]),
      'hora_salida': new FormControl("", [Validators.required]),
      'salida': new FormControl("", [Validators.required]),
      'destino': new FormControl("", [Validators.required])
    });
  }

  ngOnInit() {
    
  }

  tomarViaje(){
    if(this.formularioViaje.valid){
      let form = this.formularioViaje.value;

      this.database.tomarViaje(form.f_viaje, form.hora_salida, form.salida, form.destino).then(res => {
        if(res !== null){
          console.log('Viaje ingresado correctamente.');
          this.presentarAlerta("Viaje reservado", "El viaje ha sido reservado correctamente.");
          //Redireccionar a una página de historial de viajes ->
        } else {
          console.log('Viaje no reservado');
          this.presentarAlerta("Error al reservar", "Rellene el formulario correctamente.")
        }
      }).catch(error => {
        console.error('Error al reservar el viaje:', error);
      })
    } else {
      this.presentarAlerta("Error al reservar", "Rellene el formulario correctamente.")
    }
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


