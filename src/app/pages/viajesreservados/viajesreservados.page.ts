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
      id: '',
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
    this.database.buscarDetalleUser(id_user).then(res => {
      if(res.length > 0){
        this.database.fetchDetalleUser().subscribe(detail => {
          if(detail.length > 0){
            console.log('Detalle: ', detail);
            this.arregloDetalle = detail;

            this.arregloDetalle.forEach((element: any) => {
              this.database.buscarViajeReservado(element.id_viaje, estado).then(viaje => {
                if(viaje.length > 0){
                  this.database.fetchViajeReservado().subscribe(viajes => {
                    if(viajes.length > 0){
                      console.log('Viajes: ', viajes);
                      this.arregloViajes = viajes;
  
                      this.database.buscarDatosConductor(viajes[0].id_usuario).then(usuario => {
                        if(usuario.length > 0){
                          this.database.fetchConductor().subscribe(usuarios => {
                            if(usuarios.length > 0){
                              console.log('Usuario: ', usuarios);
                              this.arregloUsuario = usuarios;
  
                              this.database.buscarVehiculoUsuario(usuarios[0].id).then(vehiculo => {
                                if(vehiculo.length > 0){
                                  this.database.fetchVehiculoUser().subscribe(vehiculos => {
                                    if(vehiculos.length > 0){
                                      console.log('Vehiculo: ', vehiculos);
                                      this.arregloVehiculo = vehiculos;
                                    }
                                  })
                                }
                              }).catch(error => {
                                console.log('Error en Buscar Vehículo Usuario: ', error);
                                this.presentarAlerta("Error al cargar datos", "Error en funcion buscar vehículo usuario.");
                              })
                            } else {
                              this.presentarAlerta("Error al cargar datos", "Error en funcion fetch conductor.");
                            }
                          })
                        } else {
                          this.presentarAlerta("Error al cargar datos", "Error en funcion buscar datos conductor.");
                        }
                      }).catch(error => {
                        console.log('Error en Buscar Datos Usuario: ', error);
                        this.presentarAlerta("Error al cargar datos", "Error en funcion buscar datos usuario.");
                      })
                    } else {
                      this.presentarAlerta("Error aqui", "Error en funcion fetch viaje reservado.");
                    }
                  })
                } else {
                  this.presentarAlerta("Error aqui", "Error en funcion buscar viaje reservado.");
                }
              }).catch(error => {
                console.log('Error en Buscar Viaje Reservado: ', error);
              })
            })

          }
        })
      }
    }).catch(error => {
      console.log('Error en Buscar Detalle User: ', error);
    })
  }

  cancelarReserva(viaje: any){
    let id_user = localStorage.getItem('id');
    this.database.cancelarReservaUser(id_user, viaje.id_viaje).then(res => {
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
