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

  async ngOnInit() {
    try {
      let id_user = localStorage.getItem('id');
      let estado = 'Disponible.';
  
      const detalle = await this.database.buscarDetalleUser(id_user);
      if (detalle.length > 0) {
        this.arregloDetalle = detalle;
  
        for (const detail of this.arregloDetalle) {
          const viajesReservados = await this.database.buscarViajeReservado(detail.id_viaje, estado);
          
          if (viajesReservados.length > 0) {
            for (const viaje of viajesReservados) {
              const usuarios = await this.database.buscarDatosUsuario(viaje.id_usuario);
  
              if (usuarios.length > 0) {
                for (const usuario of usuarios) {
                  const vehiculos = await this.database.buscarVehiculoUsuario(usuario.id);
  
                  if (vehiculos.length > 0) {
                    this.arregloViajes.push(viaje);
                    this.arregloUsuario.push(usuario);
                    this.arregloVehiculo.push(vehiculos[0]);
                  } else {
                    this.presentarAlerta("Error aquí", "En fetch buscarVehiculoUsuario");
                  }
                }
              } else {
                this.presentarAlerta("Error aquí", "En fetch buscarDatosUsuario");
              }
            }
          } else {
            this.presentarAlerta("Error aquí", "En fetch buscarViajeReservado");
          }
        }
      } else {
        this.presentarAlerta("Error aquí", "En fetch buscarDetalleUser");
      }
    } catch (err) {
      console.log('Error: ', err);
      this.presentarAlerta("Error aquí", "Hubo un error en la carga de datos.");
    }
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
