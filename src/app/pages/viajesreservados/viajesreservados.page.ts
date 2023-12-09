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
    
                    } else {
    
                      console.log('No se han encontrado vehiculos.');
    
                    }
                  })
    
                } else {
    
                  console.log('No se han encontrado usuarios.');
    
                }
              })
    
            } else {
    
              console.log('No se han encontrado viajes.');
    
            }
          })
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
