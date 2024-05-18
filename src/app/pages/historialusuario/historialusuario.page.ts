import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { ApiFlowService } from 'src/app/services/api-flow.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historialusuario',
  templateUrl: './historialusuario.page.html',
  styleUrls: ['./historialusuario.page.scss'],
})
export class HistorialusuarioPage implements OnInit {

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
      id: '',
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

  transaccion: any;

  constructor(private database: DbserviceService, private alertController: AlertController, private apiFlow: ApiFlowService, private router: Router) { }

  postFlow(){

    const params = {
      apiKey: '1F8DDF83-C842-41A6-8A41-5D848L6E0AC0',
      currency: 'CLP',
      amount: this.arregloViajes.valor_asiento
    }

    const firma = this.apiFlow.firmarParametros(params);
    this.transaccion =  this.apiFlow.enviarPago(params);
    console.log(firma);

    if(firma !== null){

      let estado: any = this.getFlowStatus();

      JSON.parse(estado)

      if(estado !== null){

        if(estado.status = 1){

          this.presentarAlerta('Estado del pago', 'Su pago está siendo procesado y está pendiente.');

        } else if(estado.status = 2){

          this.presentarAlerta('Estado del pago', 'Su pago ha sido aprobado.');

        } else if(estado.status = 3){

          this.presentarAlerta('Estado del pago', 'Su pago ha sido rechazado.');

        } else if(estado.status = 4){

          this.presentarAlerta('Estado del pago', 'Su pago ha sido anulado.');

        }

      }
    } else {

      this.presentarAlerta('Error en la transacción', 'Ha ocurrido un error al momento de efectuar la transacción.');

    }

  }

  getFlowStatus(){

    let token = this.transaccion.token

    let paramsGet = {
      apiKey: '1F8DDF83-C842-41A6-8A41-5D848L6E0AC0',
      tokenFlow: token
    };

    this.apiFlow.obtenerPago(paramsGet).subscribe(res => {

      if(res){

        console.log('Estado del pago.');

      } else {

        console.error('Ha ocurrido un error.');

      }

    });

  }

  ngOnInit() {
    let id_user = localStorage.getItem('id');
    let estado = 'Finalizado.';
  
    // Buscar todos los detalles del usuario
    this.database.buscarDetalleUser(id_user).then(res => {
      if (res.length > 0) {
        this.database.fetchDetalleUser().subscribe(detail => {
          if (detail.length > 0) {
            console.log('Detalle: ', detail);
            this.arregloDetalle = detail;
  
            // Limpiar los arreglos antes de llenarlos nuevamente
            this.arregloViajes = [];
            this.arregloUsuario = [];
            this.arregloVehiculo = [];

            // Crear un conjunto para almacenar IDs de viajes únicos
            let viajesSet = new Set();

            // Iterar sobre todos los detalles y buscar la información correspondiente
            for (let i = 0; i < detail.length; i++) {
              // Para cada detalle, buscar el viaje reservado
              this.database.buscarViajeReservado(detail[i].id_viaje, estado).then(viaje => {
                if (viaje.length > 0) {
                  this.database.fetchViajeReservado().subscribe(viajes => {
                    if (viajes.length > 0) {
                      console.log('Viajes: ', viajes);
                      // Iterar sobre los viajes obtenidos y agregar solo aquellos que no estén en el conjunto
                      for (const nuevoViaje of viajes) {
                        if (!viajesSet.has(nuevoViaje.id_viaje)) {
                          // Agregar solo si no existe ya en el conjunto
                          viajesSet.add(nuevoViaje.id_viaje);
                          this.arregloViajes.push(nuevoViaje);
                        }
                      }
              
                      this.database.buscarDatosConductor(viajes[0].id_usuario).then(usuario => {
                        if (usuario.length > 0) {
                          this.database.fetchConductor().subscribe(usuarios => {
                            if (usuarios.length > 0) {
                              console.log('Usuario: ', usuarios);
                              this.arregloUsuario = usuarios;
              
                              this.database.buscarVehiculoUsuario(usuarios[0].id).then(vehiculo => {
                                if (vehiculo.length > 0) {
                                  this.database.fetchVehiculoUser().subscribe(vehiculos => {
                                    if (vehiculos.length > 0) {
                                      console.log('Vehiculo: ', vehiculos);
                                      this.arregloVehiculo = vehiculos;
                                    }
                                  })
                                }
                              }).catch(error => {
                                console.log('Error en Buscar Vehículo Usuario: ', error);
                              })
                            }
                          })
                        }
                      }).catch(error => {
                        console.log('Error en Buscar Datos Usuario: ', error);
                      })
                    }
                  })
                }
              }).catch(error => {
                console.log('Error en Buscar Viaje Reservado: ', error);
              })
            }
          }
        })
      } else {
        this.presentarAlerta("Viajes no encontrados", "Aun no ha concretado ninguno de sus viajes.")
      }
    }).catch(error => {
      console.log('Error en Buscar Detalle User: ', error);
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
