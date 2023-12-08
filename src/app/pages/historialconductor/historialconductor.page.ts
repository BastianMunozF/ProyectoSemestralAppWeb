import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';
import { Detalle } from 'src/app/services/detalle';
import { Usuario } from 'src/app/services/usuario';
import { Vehiculo } from 'src/app/services/vehiculo';
import { Viaje } from 'src/app/services/viaje';

@Component({
  selector: 'app-historialconductor',
  templateUrl: './historialconductor.page.html',
  styleUrls: ['./historialconductor.page.scss'],
})
export class HistorialconductorPage implements OnInit {

  id_conductor = localStorage.getItem('id');

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
    let estado = 'Finalizado.';

    this.database.buscarViajeCreadoUser(id_user, estado).then(viajes => {
      if (viajes.length > 0) {
        console.log('Viajes del usuario: ', viajes);
        this.arregloViajes = viajes;

        this.database.buscarDetalleViaje(this.arregloViajes.id_viaje).then(detalle => {
          if (detalle.length > 0) {
            console.log('Detalle del viaje: ', detalle);
            this.arregloDetalle = detalle;

            this.database.buscarDatosUsuario(this.arregloDetalle.id_usuario).then(usuario => {
              if (usuario.length > 0) {
                console.log('Usuario del viaje: ', usuario);
                this.arregloUsuario = usuario;
              } else {
                this.presentarAlerta("Error al cargar usuario", "No se ha podido cargar el usuario correctamente.");
              }
            });

          } else {
            this.presentarAlerta("Error al cargar detalle", "No se ha podido cargar el detalle correctamente.");
          }
        
        })

      } else {

        this.presentarAlerta("Error al cargar viajes", "Usted aún no ha finalizado un viaje.");

      }
    });

    this.database.buscarVehiculoUsuario(id_user)

    this.database.fetchVehiculoUser().subscribe(vehiculo => {
      this.arregloVehiculo = vehiculo;
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
