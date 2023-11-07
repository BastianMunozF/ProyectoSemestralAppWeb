import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tomarviaje',
  templateUrl: './tomarviaje.page.html',
  styleUrls: ['./tomarviaje.page.scss'],
})

export class TomarviajePage implements OnInit {

  formularioRuta: FormGroup;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private alertController: AlertController, private formBuilder: FormBuilder, private database: DbserviceService) {
    this.formularioRuta = this.formBuilder.group({
      'f_viaje': new FormControl("", [Validators.required]),
      'hora_salida': new FormControl("", [Validators.required]),
      'salida': new FormControl("", [Validators.required]),
      'destino': new FormControl("", [Validators.required]),
      'cant_asientos': new FormControl("", [Validators.required]),
      'valor_asiento': new FormControl("", [Validators.required])
    });
  }

  ngOnInit() { }

  crearRuta(){
    if(this.formularioRuta.valid){
      let form = this.formularioRuta.value;
      let id_user = localStorage.getItem('id');
      let id_vehiculo = localStorage.getItem('id_vehiculo')

      this.database.insertarRutaC(form.f_viaje, form.hora_salida, form.salida, form.destino, form.cant_asientos, form.valor_asiento, id_vehiculo, id_user).then(res => {
        if(res !== null){

          console.log('Ruta creada correctamente.');
          this.presentarAlerta("Ruta creada", "El viaje ha sido confirmado correctamente.");
          this.router.navigate(['/menuprincipal']);

          this.formularioRuta.reset();

        } else {
          
          console.log('Ruta no confirmada.');
          this.presentarAlerta("Error al crear ruta", "Rellene el formulario correctamente.");

        }

      }).catch(error => {
        console.error('Error al crear la ruta:', error);
      })

    } else {

      this.presentarAlerta("Error al crear ruta", "Rellene el formulario correctamente.");

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


