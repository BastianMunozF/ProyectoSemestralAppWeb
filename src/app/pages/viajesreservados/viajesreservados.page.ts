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
    this.database.buscarDetalleUser(id_user).then(res => {
      if(res.length > 0){
  
        this.arregloDetalle = res;
  
        this.arregloDetalle.forEach((detalle: any) => {
          // Buscar todos los viajes reservados por el usuario
          this.database.buscarViajeReservado(detalle.id_viaje, estado).then(res => {
            if(res.length > 0){
  
              this.arregloViajes = res;
  
              // Buscar todos los usuarios
              this.database.buscarDatosUsuario(this.arregloViajes.id_usuario).then(res => {
                if(res.length > 0){
  
                  this.arregloUsuario = res;
  
                  // Buscar todos los vehiculos
                  this.database.buscarVehiculoUsuario(this.arregloUsuario.id_usuario).then(res => {
                    if(res.length > 0){
  
                      this.arregloVehiculo = res;
  
                      // Crear un objeto temporal y empujarlo al arregloReserva
                      let reserva = {
                        detalle: detalle,
                        usuario: this.arregloUsuario[0],
                        vehiculo: this.arregloVehiculo[0],
                        viaje: this.arregloViajes[0]
                      };
  
                      this.arregloReserva.push(reserva);
  
                    } else {
  
                      console.log('No se han encontrado vehiculos.');
                      this.presentarAlerta("Error aqui", "Error en buscar vehiculos");
  
                    }
                  })
  
                } else {
  
                  console.log('No se han encontrado usuarios.');
                  this.presentarAlerta("Error aqui", "Error en buscar usuarios");
  
                }
              })
  
            } else {
  
              console.log('No se han encontrado viajes.');
              this.presentarAlerta("Error aqui", "Error en buscar viajes reservados");
  
            }
          })
        })
      } else {
        this.presentarAlerta("Error aqui", "Error en buscar detalle user")
      }
    })
  }

  cancelarReserva(viaje: any){
    this.database.cancelarReservaUser(viaje.viaje.id_viaje).then(res => {
      if(res){

        this.presentarAlerta("Reserva cancelada", "Su reserva ha sido cancelada.");
        // Elimina el viaje del arreglo
        const index = this.arregloViajes.indexOf(viaje.viaje);
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
