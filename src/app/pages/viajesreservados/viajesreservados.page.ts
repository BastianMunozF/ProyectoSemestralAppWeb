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
  
    // Buscar todos los detalles del usuario
    this.database.buscarDetalleUser(id_user).then(resDetalle => {
      if (resDetalle.length > 0) {
        // Obtener el arreglo de detalles
        this.database.fetchDetalleUser().subscribe(detalle => {
          if (detalle.length > 0) {
            this.arregloDetalle = detalle;
  
            // Obtener los viajes reservados del usuario
            this.database.buscarViajeReservado(detalle[2].id_viaje, estado).then(resViajes => {
              if (resViajes.length > 0) {
                // Obtener los detalles de los viajes reservados
                this.database.fetchViajeReservado().subscribe(viajes => {
                  if (viajes.length > 0) {
                    this.arregloViajes = viajes;
  
                    // Iterar sobre los viajes reservados para obtener información adicional
                    viajes.forEach(viaje => {
                      // Obtener información del usuario
                      this.database.buscarDatosUsuario(viaje.id_usuario).then(resUsuario => {
                        if (resUsuario.length > 0) {
                          const usuario = resUsuario[0]; // Supongo que solo hay un usuario con ese ID
                          this.arregloUsuario.push(usuario);
  
                          // Obtener información del vehículo
                          this.database.buscarVehiculoUsuario(usuario.id).then(resVehiculo => {
                            if (resVehiculo.length > 0) {
                              const vehiculo = resVehiculo[0]; // Supongo que solo hay un vehículo asociado a un usuario
                              this.arregloVehiculo.push(vehiculo);
                            } else {
                              this.presentarAlerta("Error al cargar vehículo", "Error en buscarVehiculoUsuario.")
                            }
                          })
                        } else {
                          this.presentarAlerta("Error al cargar usuario", "No se encontraron datos del usuario.")
                        }
                      })
                    });
  
                  } else {
                    this.presentarAlerta("Error al cargar viaje", "Error en buscarViajeReservado.")
                  }
                })
  
              } else {
                this.presentarAlerta("Error al cargar viaje", "Error en buscarViajeReservado.")
              }
            })
  
          } else {
            this.presentarAlerta("Error al cargar detalle", "Error en fetch buscarDetalleUser.")
          }
        })
      } else {
        this.presentarAlerta("Error al cargar detalle", "Error en buscarDetalleUser.")
      }
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
