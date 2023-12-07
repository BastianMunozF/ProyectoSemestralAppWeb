import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';
import { Viaje } from 'src/app/services/viaje';

@Component({
  selector: 'app-viajesiniciados',
  templateUrl: './viajesiniciados.page.html',
  styleUrls: ['./viajesiniciados.page.scss'],
})
export class ViajesiniciadosPage implements OnInit {

  // Arreglos
  arregloDetalle: any = [
    {
      id_detalle: '',
      id_usuario: '',
      id_viaje: '',
    }
  ]

  arregloUsuario: any = [
    {
      id_usuario: '',
      nombre: '',
      apellido: '',
      correo: '',
      fechanacimiento: '',
      rut: '',
      celular: '',
      contrasena: '',
      fotoperfil: '',
    }
  ]

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

  arregloViajes: any = [
    {
      id_viaje: '',
      f_viaje: '',
      hora_salida: '',
      salida: '',
      destino: '',
      cant_asientos: '',
      valor_asiento: '',
      estado: '',
      id_usuario: '',
    }
  ]

  

  constructor(private database: DbserviceService, private alertController: AlertController) { }

  ngOnInit() {
    let id_user = localStorage.getItem('id');

    this.database.buscarViajeUser(id_user);
    this.database.buscarVehiculoUsuario(id_user);

    this.database.fetchVehiculoUser().subscribe(vehiculo => {
      this.arregloVehiculo = vehiculo;
    })

    this.database.fetchViajeUser().subscribe(viajeuser => {

      if(viajeuser.length > 0){

        console.log('Viajes del usuario: ', viajeuser);
        this.arregloViajes = viajeuser;

        this.arregloViajes.forEach((viaje: {id_viaje: number}) => {
          this.database.buscarDetalleViaje(viaje.id_viaje).then(detalle => {
            if(detalle.length > 0){
              console.log('Detalle del viaje: ', detalle);
              this.arregloDetalle = detalle;
        
              this.arregloDetalle.forEach((detalleViaje: {id_usuario: number}) => {
                this.database.buscarUsuarioViaje(detalleViaje.id_usuario).then(usuario => {
                  if(usuario.length > 0){
                    console.log('Usuario del viaje: ', usuario);
                    this.arregloUsuario.push(usuario);
                  } else {
                    this.presentarAlerta("Error al cargar usuario", "No se ha encontrado el usuario del viaje.");
                  }
                })
              });
            }
          });
        });

      } else {

        this.presentarAlerta("Error al cargar viajes", "Usted aún no tiene viajes creados.");

      }
    })
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