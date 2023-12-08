import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viajesiniciados',
  templateUrl: './viajesiniciados.page.html',
  styleUrls: ['./viajesiniciados.page.scss'],
})
export class ViajesiniciadosPage implements OnInit {

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

    this.database.buscarViajeCreadoUser(id_user, estado).then(res => {
      if(res){

        console.log('Viajes del usuario: ', res);
        this.database.fetchViajeCreadoUser().subscribe(viaje => {

          if(viaje.length > 0){
    
            console.log('Viajes del usuario: ', viaje);
            this.arregloViajes = viaje;
          }

        });

      } else {

        this.presentarAlerta("Error al cargar viajes", "Usted aún no tiene viajes creados.");

      }
    });

    this.database.buscarVehiculoUsuario(id_user).then(res => {
      if(res){
        this.database.fetchVehiculoUser().subscribe(vehiculo => {
          this.arregloVehiculo = vehiculo;
        })
      }
    })

    this.arregloViajes.forEach((viaje: any) => {
      this.database.buscarDetalleViaje(viaje.id_viaje).then(res => {
        if(res){
          this.database.fetchDetalleViaje().subscribe(detalle => {
            this.arregloDetalle = detalle;
  
            this.arregloDetalle.forEach((id: any) => {
              this.database.buscarDatosUsuario(id.id_usuario).then(res => {
                if(res){
                  this.database.fetchUsuarioId().subscribe(usuario => {
                    this.arregloUsuario.push(usuario);
                  })
                }
              })
            })
          })
        }
      })
    })
  }

  iniciarViaje(viaje: any){
    let estado = 'Iniciado.'

    this.database.actualizarViaje(estado, viaje.id_viaje).then(res => {
      if(res){

        this.presentarAlerta("Viaje Iniciado", "Su viaje ha sido iniciado con éxito.");
        // Elimina el viaje del arreglo
        const index = this.arregloViajes.indexOf(viaje);
        if(index !== -1){
          this.arregloViajes.splice(index, 1);
        }

      } else {

        this.presentarAlerta("Error al iniciar viaje", "No se ha podido iniciar el viaje correctamente.");

      }
    })
  }

  cancelarViaje(viaje: any){
    this.database.eliminarViajeUser(viaje.id_viaje).then(res => {
      if(res){

        this.presentarAlerta("Viaje Cancelado", "Su viaje ha sido cancelado con éxito.");
        const index = this.arregloViajes.indexOf(viaje);
        if(index !== -1){
          this.arregloViajes.splice(index, 1);
        }

      } else {

        this.presentarAlerta("Error al cancelar viaje", "No se ha podido cancelar el viaje correctamente.");

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