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
    let reserva: any = [];

    // Buscar todos los detalles del usuario
    this.database.buscarDetalleUser(id_user).then(detalle => {
      if(detalle.length > 0){

        this.database.fetchDetalleUser().subscribe(detail => {
          if(detail.length > 0){
            this.arregloDetalle = detalle;

            this.database.buscarViajeReservado(detalle[0].id_viaje, estado).then(viaje => {
              if(viaje.length > 0){
                this.database.fetchViajeReservado().subscribe(viajes => {
                  if(viajes.length > 0){
                    this.arregloViajes = viaje;

                    this.database.buscarDatosUsuario(viaje[0].id_usuario).then(usuario => {
                      if(usuario.length > 0){
                        this.database.fetchUsuarioId().subscribe(usuarios => {
                          if(usuarios.length > 0){
                            this.arregloUsuario = usuario;

                            this.database.buscarVehiculoUsuario(usuario[0].id).then(vehiculo => {
                              if(vehiculo.length > 0){
                                for(var i = 0; i < this.arregloDetalle.length; i++){
                                  for(var j = 0; j < this.arregloUsuario.length; j++){
                                    for(var k = 0; k < this.arregloViajes.length; k++){
                                      for(var l = 0; l < vehiculo.length; l++){
                                        reserva.push({
                                          detalle: this.arregloDetalle[i],
                                          usuario: this.arregloUsuario[j],
                                          vehiculo: vehiculo[l],
                                          viaje: this.arregloViajes[k]
                                        })
                                      }
                                    }
                                  }
                                }
                                return this.arregloReserva.push(reserva);
                              }
                            })
                          }
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        })
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
