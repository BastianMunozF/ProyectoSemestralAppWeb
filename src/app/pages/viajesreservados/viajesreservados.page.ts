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

  arregloReserva: any = [
    {
      detalle:
      {
        id_detalle: '',
        id_usuario: '',
        id_viaje: '',
      },
      usuario:
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
      },
      vehiculo:
      {
        id_vehiculo: '',
        marca: '',
        modelo: '',
        anio: '',
        patente: '',
        asientos: '',
        id_usuario: '',
        id_tipo: '',
      },
      viaje:
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
    }
  ]

  constructor(private database: DbserviceService, private alertController: AlertController) { }

  ngOnInit() {
    let id_user = localStorage.getItem('id');
    let estado = 'Disponible.';
  
    // Buscar todos los detalles del usuario
    this.database.buscarDetalleUser(id_user).then(detalle => {
      if (detalle.length > 0) {
        this.database.fetchDetalleUser().subscribe(detail => {
          if (detail.length > 0) {
            this.arregloDetalle = detail;
  
            // Utilizamos Promise.all para esperar a que todas las promesas se resuelvan
            Promise.all(detail.map((index: any) => {
              return this.database.buscarViajeReservado(index.id_viaje, estado).then(viaje => {
                if (viaje.length > 0) {
                  return this.database.fetchViajeReservado().toPromise();
                }
                // Agregamos un retorno de valor por defecto si la condición no se cumple
                return null;
              });
            })).then(viajes => {
              // Filtrar viajes no nulos
              viajes = viajes.filter(viaje => viaje !== null);
  
              if (viajes.length > 0) {
                // Suponemos que solo estamos interesados en el primer viaje
                this.arregloViajes = viajes[0];
  
                this.database.buscarDatosUsuario(this.arregloViajes[0].id_usuario).then(usuario => {
                  if (usuario.length > 0) {
                    this.database.fetchUsuarioId().subscribe(usuarios => {
                      if (usuarios.length > 0) {
                        this.arregloUsuario = usuario;
  
                        // Ahora, asumiendo que puedes obtener los datos del vehículo
                        this.database.buscarVehiculoUsuario(this.arregloViajes[0].id_vehiculo).then(vehiculo => {
                          if (vehiculo.length > 0) {
                            // Suponemos que solo estamos interesados en el primer vehículo
                            let arregloVehiculo = vehiculo[0];
  
                            // Suponemos que ya tienes el arregloVehiculo definido en otro lugar
                            let reserva = {
                              detalle: this.arregloDetalle[0],
                              usuario: this.arregloUsuario[0],
                              vehiculo: arregloVehiculo,
                              viaje: this.arregloViajes[0]
                            };
  
                            this.arregloReserva.push(reserva);
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
      // Agregamos un retorno de valor por defecto si la condición no se cumple
      return null;
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
