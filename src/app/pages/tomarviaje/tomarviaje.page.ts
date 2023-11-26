import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tomarviaje',
  templateUrl: './tomarviaje.page.html',
  styleUrls: ['./tomarviaje.page.scss'],
})

export class TomarviajePage implements OnInit {

  arregloViajes: any;
  arregloViajeId: any;
  formularioAceptar: FormGroup;

  constructor(private alertController: AlertController, private database: DbserviceService, private router: Router, private fb: FormBuilder) {
    this.formularioAceptar = this.fb.group({
      'asientores': new FormControl("", [Validators.required])
    })
  }

  ngOnInit() {
    this.database.buscarViaje().then((data) => {
      this.arregloViajes = data;
    });
  }

  aceptarViaje(id_viaje: any, id_conductor: any){

    let id_usuario = localStorage.getItem('id');

    if(this.formularioAceptar.valid){

      let form = this.formularioAceptar.value;

      this.database.buscarViajeId(id_viaje).then(viaje => {
        
        if(viaje !== null){

          this.arregloViajeId = viaje[0];

          let estado = 'Reservado.';
          let asientos = this.arregloViajeId.cant_asientos - form.asientores;

          if(asientos < 0){

            if(asientos < this.arregloViajeId.cant_asientos){
              this.database.insertarViajeAceptado(id_usuario, id_conductor, id_viaje).then(res => {
                if(res !== null){
                  this.database.actualizarEstadoViaje(estado, asientos, id_viaje).then(actualizado => {
                    if(actualizado){
                      this.presentarAlerta("Viaje Aceptado", "El viaje seleccionado ha sido confirmado con éxito.");
                      this.router.navigate(['/menuprincipal']);
                    } else {
                      this.presentarAlerta("Error al aceptar viaje", "El viaje no se ha podido confirmar correctamente");
                    }
                  });
                }
              });
            } else {
              this.presentarAlerta("Error al aceptar viaje", "Los asientos que desea reservar son mayores a los asientos disponibles")
            }
          } else {
            this.presentarAlerta("Error al aceptar viaje", "El viaje que desea reservar ya no tiene asientos disponibles.");
          }
        } else {
          this.presentarAlerta("Viaje no Encontrado", "El viaje que desea reservar no se encuentra disponible.");
        }
      });
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


/*

this.database.insertarViajeAceptado(id_usuario, id_viaje).then(res => {
      if(res !== null){

        let estado = 'Aceptado.';

        this.database.actualizarEstadoViaje(estado, id_usuario).then(actualizado => {
          if(actualizado){
            this.presentarAlerta("Viaje Aceptado", "El viaje seleccionado ha sido confirmado con éxito.");
            this.router.navigate(['/historialconductor'])
          } else {
            this.presentarAlerta("Error al aceptar viaje", "El viaje no se ha podido confirmar correctamente")
          }
        })

      } else {
        this.presentarAlerta("Error al aceptar viaje", "El viaje no se ha podido confirmar correctamente")
      }
    });
*/