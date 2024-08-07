import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Vehiculo } from 'src/app/services/vehiculo';

@Component({
  selector: 'app-rutaconductor',
  templateUrl: './rutaconductor.page.html',
  styleUrls: ['./rutaconductor.page.scss'],
})

export class RutaconductorPage implements OnInit {

  formularioRuta: FormGroup;
  vehiculo!: Vehiculo;
  asientos: any;

  arregloVehiculo: any = [
    {
      id_vehiculo: '',
      marca: '',
      modelo: '',
      anio: '',
      patente: '',
      asientos: '',
      id_usuario: '',
      id_tipo: '',
    }
  ]

  constructor(private router: Router, private alertController: AlertController, private formBuilder: FormBuilder, private database: DbserviceService) {

    this.formularioRuta = this.formBuilder.group({
      'f_viaje': new FormControl("", [Validators.required]),
      'hora_salida': new FormControl("", [Validators.required]),
      'salida': new FormControl("", [Validators.required]),
      'destino': new FormControl("", [Validators.required]),
      'cant_asientos': new FormControl("", [Validators.required]),
      'valor_asiento': new FormControl("", [Validators.required])
    });
  }

  ngOnInit() {
  }

  crearRuta(){

    if(this.formularioRuta.valid){

      let form = this.formularioRuta.value;
      let estado = 'Disponible.';

      let id_conductor = localStorage.getItem('id');

      this.database.buscarVehiculoUsuario(id_conductor).then(res => {
        if(res.length > 0){

          this.arregloVehiculo = res;

          let vehiculo = this.arregloVehiculo[0];

          if(form.cant_asientos <= vehiculo.asientos){

            this.database.insertarRutaC(form.f_viaje, form.hora_salida, form.salida, form.destino, form.cant_asientos, form.valor_asiento, estado, id_conductor).then(res => {

              if(res !== null){

                console.log('Ruta creada correctamente.');
                this.presentarAlerta("Ruta creada", "El viaje ha sido confirmado correctamente.");
                this.router.navigate(['/menuprincipalconductor']);

                this.formularioRuta.reset();

              } else {

                console.log('Ruta no confirmada.');
                this.presentarAlerta("Error al crear ruta", "Rellene el formulario correctamente.");

              }

            }).catch(error => {
              console.error('Error al crear la ruta:', error);
            });

          } else {

            this.presentarAlerta("Error al crear viaje", "La cantidad de asientos ingresada es mayor a los asientos del vehículo registrado.");

          }

        } else {

          this.presentarAlerta("Error al crear viaje", "Debe registrar un vehículo antes de crear un viaje.");

        }

      });

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