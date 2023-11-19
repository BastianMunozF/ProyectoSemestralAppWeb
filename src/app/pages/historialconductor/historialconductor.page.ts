import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-historialconductor',
  templateUrl: './historialconductor.page.html',
  styleUrls: ['./historialconductor.page.scss'],
})
export class HistorialconductorPage implements OnInit {

  arregloViajes: any;
  arregloUsuario: any;
  arregloVehiculo: any;
  detallesViaje: any;

  arregloTodo: any = [
    {
      nombre: '',
      f_viaje: '',
      hora: '',
      salida: '',
      destino: '',
      asientos: '',
      valor: '',
      estado: '',
      marca: '',
      modelo: '',
    }
  ]

  id_conductor = localStorage.getItem('id');

  constructor(private database: DbserviceService, private alertController: AlertController) { }

  ngOnInit() {

    this.database.buscarDetalleUsuario(this.id_conductor).then(detalle => {
      if (detalle) {
        this.detallesViaje = detalle;
  
        this.database.buscarDatosUsuario(this.detallesViaje.id_usuario).then(usuario => {
          if (usuario) {
            this.arregloUsuario = usuario;
            this.arregloTodo.nombre = this.arregloUsuario.nombre;
  
            this.database.buscarViajeUser(this.detallesViaje.id_usuario).then(viaje => {
              if (viaje) {
                this.arregloViajes = viaje;
  
                this.arregloTodo.f_viaje = this.arregloViajes.f_viaje;
                this.arregloTodo.hora = this.arregloViajes.hora_salida;
                this.arregloTodo.salida = this.arregloViajes.salida;
                this.arregloTodo.destino = this.arregloViajes.destino;
                this.arregloTodo.asientos = this.arregloViajes.cant_asientos;
                this.arregloTodo.valor = this.arregloViajes.valor_asiento;
                this.arregloTodo.estado = this.arregloViajes.estado;
  
                this.database.buscarVehiculoUsuario(this.id_conductor).then(vehiculo => {
                  if (vehiculo) {
                    this.arregloVehiculo = vehiculo;
                    this.arregloTodo.marca = this.arregloVehiculo.marca;
                    this.arregloTodo.modelo = this.arregloVehiculo.modelo;
                  } else {
                    console.log('Error al buscar vehiculo.');
                  }
                });
              } else {
                console.log('Error al buscar viaje.');
              }
            });
          } else {
            console.log('Error al buscar usuario.');
          }
        });
      } else {
        this.presentarAlerta('Viajes no encontrados', 'Usted aún no ha aceptado ningún viaje.');
      }
    });
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
