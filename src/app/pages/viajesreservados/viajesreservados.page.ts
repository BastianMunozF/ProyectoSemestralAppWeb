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

  async ngOnInit() {
    let id_user = localStorage.getItem('id');
    let estado = 'Disponible.';
  
    let detalle = await this.database.buscarDetalleUser(id_user);
    console.log('Detalle:', detalle);
  
    if(detalle.length > 0){
      this.arregloDetalle = detalle;
  
      for(let index of detalle) {
        let viaje = await this.database.buscarViajeReservado(index.id_viaje, estado);
        console.log('Viaje:', viaje);
  
        if(viaje.length > 0){
          this.arregloViajes = viaje;
  
          for(let index of viaje) {
            let usuario = await this.database.buscarDatosUsuario(index.id_usuario);
            console.log('Usuario:', usuario);
  
            if(usuario.length > 0){
              this.arregloUsuario = usuario;
  
              // Buscar los datos del vehículo
              let vehiculo = await this.database.buscarVehiculoUsuario(index.id_usuario);
              console.log('Vehiculo:', vehiculo);
  
              if(vehiculo.length > 0){
                this.arregloVehiculo = vehiculo;
  
                let reserva = {
                  detalle: this.arregloDetalle,
                  usuario: this.arregloUsuario,
                  vehiculo: this.arregloVehiculo,
                  viaje: this.arregloViajes,
                }
  
                this.arregloReserva = reserva;
                console.log('Reserva:', reserva);
                console.log('arregloReserva:', this.arregloReserva);
              }
            }
          }
        }
      }
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
