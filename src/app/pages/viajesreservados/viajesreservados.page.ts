import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viajesreservados',
  templateUrl: './viajesreservados.page.html',
  styleUrls: ['./viajesreservados.page.scss'],
})
export class ViajesreservadosPage implements OnInit {

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
    let estado = 'Disponible.';

    this.database.buscarDetalleUser(id_user);

    this.database.fetchDetalleUser().subscribe(detalle => {
      if(detalle.length > 0){
        this.arregloDetalle = detalle;

        this.arregloDetalle.forEach((detalle: any) => {
          this.database.buscarViajeReservado(detalle.id_viaje, estado);

          this.database.fetchViajeReservado().subscribe(viaje => {
            if(viaje.length > 0){
              this.arregloViajes = viaje;

              this.arregloViajes.forEach((viaje: any, index: number) => {
                this.database.buscarDatosUsuario(viaje.id_usuario);

                this.database.fetchUsuarioId().subscribe(usuario => {
                  if(usuario.length > 0){
                    this.arregloUsuario[index] = usuario[0];

                    this.database.buscarVehiculoUsuario(usuario[0].id);

                    this.database.fetchVehiculoUser().subscribe(vehiculo => {
                      if(vehiculo.length > 0){
                        this.arregloVehiculo[index] = vehiculo[0];
                      }
                    })
                  }
                })
              });
            }
          })
        });
      }
    })
  }

  cancelarReserva(viaje: any){
    this.database.cancelarReservaUser(viaje.id_viaje).then(res => {
      if(res){

        this.presentarAlerta("Reserva cancelada", "Su reserva ha sido cancelada.");
        // Elimina el viaje del arreglo
        const index = this.arregloViajes.indexOf(viaje);
        if(index !== -1){
          this.arregloViajes.splice(index, 1);
        }

      } else {

        this.presentarAlerta("Error al cancelar reserva", "No se ha podido cancelar su reserva.");

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
