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

  constructor(private database: DbserviceService, private alertController: AlertController) { }

  ngOnInit() {
    const id_conductor = localStorage.getItem('id');

    this.database.buscarDetalleUsuario(id_conductor).then(detalle => {
      if(detalle){

        //Guardamos id's de los detalles del viaje
        this.detallesViaje = detalle;
      } else {
        this.presentarAlerta('Viajes no encontrados', 'Usted aún no ha aceptado ningún viaje.');
      }
    });

    this.database.buscarDatosUsuario(this.detallesViaje.id_usuario).then(usuario => {
      if(usuario){

        //Guardamos datos del usuario que ha pedido el viaje
        this.arregloUsuario = usuario;

        //Guardamos los datos en el arreglo total
        this.arregloTodo.nombre = this.arregloUsuario.nombre;

      } else {
        console.log('Error al buscar usuario.');
      }
    });

    this.database.buscarViajeUser(this.detallesViaje.id_usuario).then(viaje => {
      if(viaje){
        //Guardamos los datos del viaje aceptado
        this.arregloViajes = viaje;

        //Guardamos datos del viaje en arreglo total
        this.arregloTodo.f_viaje = this.arregloViajes.f_viaje;
        this.arregloTodo.hora = this.arregloViajes.hora_salida;
        this.arregloTodo.salida = this.arregloViajes.salida;
        this.arregloTodo.destino = this.arregloViajes.destino;
        this.arregloTodo.asientos = this.arregloViajes.cant_asientos;
        this.arregloTodo.valor = this.arregloViajes.valor_asiento;
        this.arregloTodo.estado = this.arregloViajes.estado;
  
      } else {
        console.log('Error al buscar viaje.');
      }
    });

    this.database.buscarVehiculoUsuario(id_conductor).then(vehiculo => {
      if(vehiculo){
        
        //Guardamos datos del vehiculo utilizado por el conductor
        this.arregloVehiculo = vehiculo;

        //Guardamos datos del vehiculo en arreglo total
        this.arregloTodo.marca = this.arregloVehiculo.marca;
        this.arregloTodo.modelo = this.arregloVehiculo.modelo;

      } else {
        console.log('Error al buscar vehiculo.');
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
