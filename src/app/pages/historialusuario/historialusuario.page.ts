import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { ApiFlowService } from 'src/app/services/api-flow.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

declare var paypal: any;

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


  //PAYPAL
  ngAfterViewInit() {
    this.loadAllPayPalButtons();
  }
  
  loadAllPayPalButtons() {
    for (const viaje of this.arregloViajes) {
      this.loadPayPalButtons(viaje.id_viaje);
    }
  }
  
  loadPayPalButtons(id_viaje: string) {
    // Limpia el contenedor del botón de PayPal antes de renderizar uno nuevo
    const container = document.getElementById(`paypal-button-container-${id_viaje}`);
    if (container) {
      container.innerHTML = ''; // Elimina cualquier contenido previo
  
      const viaje = this.arregloViajes.find((v: { id_viaje: string; valor_asiento: number; }) => v.id_viaje === id_viaje);
      if (viaje) {
        paypal.Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: viaje.valor_asiento.toString()
                }
              }]
            });
          },
          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              alert('Transacción realizada por ' + details.payer.name.given_name);
            }).catch((error: any) => {
              console.error('Error al capturar la transacción:', error);
              this.presentarAlerta('Error en la transacción', 'Hubo un problema al completar el pago. Por favor, inténtalo de nuevo.');
            });
          },
          onError: (err: any) => {
            console.error('Error en PayPal:', err);
            this.presentarAlerta('Error en PayPal', 'Hubo un problema con el pago. Por favor, inténtalo de nuevo.');
          }
        }).render(`#paypal-button-container-${id_viaje}`);
      } else {
        console.error('Viaje no encontrado:', id_viaje);
        this.presentarAlerta('Error', 'Viaje no encontrado. Por favor, inténtalo de nuevo.');
      }
    } else {
      console.error('Contenedor de PayPal no encontrado:', `paypal-button-container-${id_viaje}`);
      this.presentarAlerta('Error', 'Contenedor de PayPal no encontrado. Por favor, inténtalo de nuevo.');
    }
  }
    
  //

  async postFlow(viaje: any) {

    try {
      const params = {
        apiKey: '1F8DDF83-C842-41A6-8A41-5D848L6E0AC0',
        commerceOrder: 'ORDEN' + viaje.id_viaje,
        subject: 'Pago de Viaje',
        amount: viaje.valor_asiento,
        email: 'basti.munoz.f@hotmail.com',
        paymentMethod: 9,
        urlConfirmation: 'https://proyecto-semestral-app-web.vercel.app/historialusuario',
        urlReturn: 'https://proyecto-semestral-app-web.vercel.app/historialusuario',
        timeout: 3600
      };

      const response = await this.apiFlow.crearOrdenPago(params).toPromise();

      this.presentarAlerta("Response en historialusuario", "Response" + JSON.stringify(response));
      console.log('Respuesta de postFlow:', response); // Imprime la respuesta para verificar

      const redirecturl = `${response.url}?token=${response.token}`;

      this.presentarAlerta("redirecturl con datos de response", "Historialusuario" + JSON.stringify(redirecturl));
      if (response && response.url && response.token) {
        const redirectUrl = `${response.url}?token=${response.token}`;
        this.presentarAlerta("RedirectURL", "" + redirectUrl.toString());
        window.location.href = redirectUrl;
      } else {
        console.error('Error en la transacción: No se recibió la URL de redirección.');
        this.presentarAlerta('Error en la transacción', 'No se recibió la URL de redirección.');
      }
  
    } catch (error) {
      console.error('Error en la transacción:', error);
      this.presentarAlerta('Error en la transacción', 'Ha ocurrido un error al momento de efectuar la transacción.' + JSON.stringify(error));
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
