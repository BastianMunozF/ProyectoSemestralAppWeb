import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { Vehiculo } from 'src/app/services/vehiculo';

@Component({
  selector: 'app-registrarvehiculo',
  templateUrl: './registrarvehiculo.page.html',
  styleUrls: ['./registrarvehiculo.page.scss'],
})
export class RegistrarvehiculoPage implements OnInit {
  formularioVehiculo: FormGroup;
  vehiculo!: Vehiculo;

  constructor(private formBuilder: FormBuilder, private database: DbserviceService, private router: Router, private alertController: AlertController) {
    this.formularioVehiculo = this.formBuilder.group({
      'marca': new FormControl("", [Validators.required]),
      'modelo': new FormControl("", [Validators.required]),
      'annio': new FormControl("", [Validators.required]),
      'patente': new FormControl("", [Validators.required]),
      'cant_asientos': new FormControl("", [Validators.required]),
      'id_tipo': new FormControl("", [Validators.required])
    });
  }

  ngOnInit() {
  }

  guardarVehiculo(){
    if(this.formularioVehiculo.valid){
      let form = this.formularioVehiculo.value;
      let id_user = localStorage.getItem('id');

      this.database.insertarVehiculo(form.marca, form.modelo, form.annio, form.patente, form.cant_asientos, id_user, form.id_tipo).then(res => {
        if(res !== null){
          localStorage.setItem('id_vehiculo', this.vehiculo.id_usuario.toString());
          console.log('Vehículo registrado exitosamente.');
          this.presentarAlerta("Vehiculo Registrado", "Su vehículo ha sido registrado con éxito.");
          this.router.navigate(['/menuprincipalconductor']);
          this.formularioVehiculo.reset();
        } else {
          console.log('Error al registrar Vehículo');
          this.presentarAlerta("Error al registrar", "Rellene el formulario correctamente.")
        }
      })
    } else {
      this.presentarAlerta("Error al registrar", "Rellene el formulario correctamente.");
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
