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
  
    this.database.buscarDetalleUser(id_user).then(detalle => {
      if (detalle.length > 0) {
        this.arregloDetalle = detalle;
  
        this.arregloDetalle.forEach((detail: any) => {
          this.database.buscarViajeReservado(detail.id_viaje, estado).then(viajesReservados => {
            if (viajesReservados.length > 0) {
              viajesReservados.forEach((viaje: any) => {
                this.database.buscarDatosUsuario(viaje.id_usuario).then(usuarios => {
                  if (usuarios.length > 0) {
                    usuarios.forEach((usuario: any) => {
                      this.database.buscarVehiculoUsuario(usuario.id_usuario).then(vehiculos => {
                        if (vehiculos.length > 0) {
                          this.arregloViajes.push(viaje);
                          this.arregloUsuario.push(usuario);
                          this.arregloVehiculo.push(vehiculos[0]); // Supongo que solo quieres el primer vehículo
                        } else {
                          this.presentarAlerta("Error aqui", "En fetch buscarVehiculoUsuario");
                        }
                      }).catch(err => {
                        console.log('Error: ', err);
                        this.presentarAlerta("Error aqui", "En funcion buscarVehiculoUsuario");
                      });
                    });
                  } else {
                    this.presentarAlerta("Error aqui", "En fetch buscarDatosUsuario");
                  }
                }).catch(err => {
                  console.log('Error: ', err);
                  this.presentarAlerta("Error aqui", "En funcion buscarDatosUsuario");
                });
              });
            } else {
              this.presentarAlerta("Error aqui", "En fetch buscarViajeReservado");
            }
          }).catch(err => {
            console.log('Error: ', err);
            this.presentarAlerta("Error aqui", "En funcion buscarViajeReservado");
          });
        });
      } else {
        this.presentarAlerta("Error aqui", "En fetch buscarDetalleUser");
      }
    }).catch(err => {
      console.log('Error: ', err);
      this.presentarAlerta("Error aqui", "En funcion buscarDetalleUser");
    });
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
