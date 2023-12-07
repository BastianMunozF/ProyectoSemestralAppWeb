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

    this.database.buscarViajeUser(id_user).then(res => {
      if(res){

        console.log('Viajes del usuario: ', res);

      } else {

        this.presentarAlerta("Error al cargar viajes", "Usted aún no tiene viajes creados.");

      }
    });
    this.database.buscarVehiculoUsuario(id_user);

    this.database.fetchVehiculoUser().subscribe(vehiculo => {
      this.arregloVehiculo = vehiculo;
    })

    this.database.fetchViajeUser().subscribe(viaje => {
      if(viaje.length > 0){

        console.log('Viajes del usuario: ', viaje);
        this.arregloViajes = viaje;

      } else {

        this.presentarAlerta("Error al cargar viajes", "Usted aún no tiene viajes creados.");

      }
    })

    this.database.buscarDetalleViaje(this.arregloViajes.id_viaje);

    this.database.fetchDetalleViaje().subscribe(detalle => {
      if(detalle.length > 0){

        console.log('Detalle del viaje: ', detalle);
        this.arregloDetalle = detalle;

      }

    })

    this.arregloDetalle.forEach((idusuario: any) => {
      this.database.buscarDatosUsuario(idusuario.id_usuario);

      this.database.fetchUsuarioId().subscribe(usuario => {
        if(usuario.length > 0){

          console.log('Datos del usuario: ', usuario);
          this.arregloUsuario = usuario;

        }
      })

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