import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viajescurso',
  templateUrl: './viajescurso.page.html',
  styleUrls: ['./viajescurso.page.scss'],
})
export class ViajescursoPage implements OnInit {

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
    let estado = 'Iniciado.';

    this.database.buscarViajeIniciado(id_user, estado).then(res => {
      if(res.length > 0){

        console.log('Viajes del usuario: ', res);
        this.database.fetchViajeAceptado().subscribe(viaje => {

          if(viaje.length > 0){
    
            console.log('Viajes del usuario: ', viaje);
            this.arregloViajes = viaje;
          }

        });

      } else {

        this.presentarAlerta("Error al cargar viajes", "Usted aún no tiene viajes iniciados.");

      }

    });

    this.database.buscarVehiculoUsuario(id_user);

    this.database.fetchVehiculoUser().subscribe(vehiculo => {
      this.arregloVehiculo = vehiculo;
    })

    this.database.buscarDetalleViaje(this.arregloViajes.id_viaje);

    this.database.fetchDetalleViaje().subscribe(detalle => {
      if(detalle.length > 0){

        console.log('Detalle del viaje: ', detalle);
        this.arregloDetalle = detalle;

      }

    })

    this.arregloDetalle.forEach((idusuario: any) => {
      this.database.buscarDatosUsuario(idusuario.id_usuario).then(res => {
        if(res.length > 0){
          this.database.fetchUsuarioId().subscribe(usuario => {
            if(usuario.length > 0){
    
              console.log('Datos del usuario: ', usuario);
              this.arregloUsuario.push(usuario);
    
            }
          });
        }
      })

    });

  }

  finalizarViaje(viaje: any){
    let estado = 'Finalizado.';

    this.database.actualizarViaje(estado, viaje.id_viaje).then(res => {
      if(res){

        this.presentarAlerta("Viaje Finalizado", "Su viaje ha sido finalizado con éxito. Puede ver su viaje en el historial.");
        // Elimina el viaje del arreglo
        const index = this.arregloViajes.indexOf(viaje);
        if(index !== -1){
          this.arregloViajes.splice(index, 1);
        }

      } else {

        this.presentarAlerta("Error al finalizar viaje", "No se ha podido finalizar el viaje correctamente.");

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
