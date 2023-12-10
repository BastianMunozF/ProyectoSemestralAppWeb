import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-historialusuario',
  templateUrl: './historialusuario.page.html',
  styleUrls: ['./historialusuario.page.scss'],
})
export class HistorialusuarioPage implements OnInit {

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
    let estado = 'Finalizado.';
  
    // Buscar todos los detalles del usuario
    this.database.buscarDetalleUser(id_user).then(res => {
      if (res.length > 0) {
        this.database.fetchDetalleUser().subscribe(detail => {
          if (detail.length > 0) {
            console.log('Detalle: ', detail);
            this.arregloDetalle = detail;
  
            // Limpiar los arreglos antes de llenarlos nuevamente
            this.arregloViajes = [];
            this.arregloUsuario = [];
            this.arregloVehiculo = [];

            // Iterar sobre todos los detalles y buscar la información correspondiente
            for (let i = 0; i < detail.length; i++) {
              // Para cada detalle, buscar el viaje reservado
              this.database.buscarViajeReservado(detail[i].id_viaje, estado).then(viaje => {
                if (viaje.length > 0) {
                  this.database.fetchViajeReservado().subscribe(viajes => {
                    if (viajes.length > 0) {
                      console.log('Viajes: ', viajes);
                      // Agregar los viajes al arreglo existente en lugar de sobrescribirlo
                      this.arregloViajes.push(...viajes);
  
                      this.database.buscarDatosConductor(viajes[0].id_usuario).then(usuario => {
                        if (usuario.length > 0) {
                          this.database.fetchConductor().subscribe(usuarios => {
                            if (usuarios.length > 0) {
                              console.log('Usuario: ', usuarios);
                              this.arregloUsuario = usuarios;
  
                              this.database.buscarVehiculoUsuario(usuarios[0].id).then(vehiculo => {
                                if (vehiculo.length > 0) {
                                  this.database.fetchVehiculoUser().subscribe(vehiculos => {
                                    if (vehiculos.length > 0) {
                                      console.log('Vehiculo: ', vehiculos);
                                      this.arregloVehiculo = vehiculos;
                                    }
                                  })
                                }
                              }).catch(error => {
                                console.log('Error en Buscar Vehículo Usuario: ', error);
                              })
                            }
                          })
                        }
                      }).catch(error => {
                        console.log('Error en Buscar Datos Usuario: ', error);
                      })
                    }
                  })
                }
              }).catch(error => {
                console.log('Error en Buscar Viaje Reservado: ', error);
              })
            }
          }
        })
      } else {
        this.presentarAlerta("Viajes no encontrados", "Aun no ha concretado ninguno de sus viajes.")
      }
    }).catch(error => {
      console.log('Error en Buscar Detalle User: ', error);
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
