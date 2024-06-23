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

  arregloUser: any = [
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

  constructor(private database: DbserviceService, private alertController: AlertController, private apiFlow: ApiFlowService) { }

  async ngOnInit() {
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

  async postFlow(viaje: any) {

    console.log(viaje)
  
    try {

      const paramsGet = {
        "apiKey": '1F8DDF83-C842-41A6-8A41-5D848L6E0AC0',
        "currency": 'CLP',
        "amount": viaje.valor_asiento
      }

      const secretKey = this.apiFlow.firmarParametros(paramsGet);

      console.log(secretKey)

      let id_user = localStorage.getItem('id')

      this.database.buscarDatosUsuario(id_user).then(res => {
        if(res){
          this.arregloUser = res;
        }
      })

      console.log(usuario)

      const params = {
        apiKey: '1F8DDF83-C842-41A6-8A41-5D848L6E0AC0',
        commerceOrder: 'ORDEN' + viaje.id_viaje,
        subject: 'Pago de Viaje',
        amount: viaje.valor_asiento,
        email: this.arregloUser.correo,
        paymentMethod: 9,
        urlConfirmation: 'https://proyecto-semestral-app-web.vercel.app/historialusuario',
        urlReturn: 'https://proyecto-semestral-app-web.vercel.app/historialusuario',
        timeout: 3600,
        s: secretKey
      };
  
      const response = await this.apiFlow.crearOrdenPago(params).toPromise();

      console.log(response)
  
      if (response && response.url && response.token) {
        const redirectUrl = `${response.url}?token=${response.token}`;
        window.location.href = redirectUrl;
      } else {
        this.presentarAlerta('Error en la transacción', 'No se recibió la URL de redirección.');
      }
    } catch (error) {
      console.error('Error en la transacción:', error);
      this.presentarAlerta('Error en la transacción', 'Ha ocurrido un error al momento de efectuar la transacción.');
    }
  }

  getFlowStatus() {
      if (!this.transaccion || !this.transaccion.token) {
          console.error('Token de transacción no disponible.');
          return;
      }

      const token = this.transaccion.token;

      const paramsGet = {
          apiKey: '1F8DDF83-C842-41A6-8A41-5D848L6E0AC0',
          tokenFlow: token
      };

      this.apiFlow.obtenerPago(paramsGet).subscribe(res => {
          if (res) {
              console.log('Estado del pago:', res);
          } else {
              console.error('Ha ocurrido un error al obtener el estado del pago.');
          }
      }, error => {
          console.error('Error en la obtención del estado del pago:', error);
      });
  }

  async presentarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });
    await alert.present();
  }
}
