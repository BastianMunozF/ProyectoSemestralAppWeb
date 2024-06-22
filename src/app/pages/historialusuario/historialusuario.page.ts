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

  arregloDetalle: any[] = [];

  constructor(
    private database: DbserviceService,
    private alertController: AlertController,
    private apiFlow: ApiFlowService,
    private router: Router
  ) { }

  async ngOnInit() {
    let id_user = localStorage.getItem('id');
    let estado = 'Finalizado.';

    try {
      const res = await this.database.buscarDetalleUser(id_user);
      if (res.length > 0) {
        const detail = await this.database.fetchDetalleUser().toPromise();
        if (detail && detail.length > 0) {
          this.arregloDetalle = detail.map(d => ({
            ...d,
            usuario: null,
            viaje: null,
            vehiculo: null
          }));

          for (let i = 0; i < this.arregloDetalle.length; i++) {
            const detalle = this.arregloDetalle[i];

            const viaje = await this.database.buscarViajeReservado(detalle.id_viaje, estado);
            if (viaje && viaje.length > 0) {
              detalle.viaje = viaje[0];

              const usuario = await this.database.buscarDatosConductor(viaje[0].id_usuario);
              if (usuario && usuario.length > 0) {
                detalle.usuario = usuario[0];

                const vehiculo = await this.database.buscarVehiculoUsuario(usuario[0].id);
                if (vehiculo && vehiculo.length > 0) {
                  detalle.vehiculo = vehiculo[0];
                }
              }
            }
          }
        } else {
          this.presentarAlerta("Viajes no encontrados", "Aún no ha concretado ninguno de sus viajes.");
        }
      } else {
        this.presentarAlerta("Viajes no encontrados", "Aún no ha concretado ninguno de sus viajes.");
      }
    } catch (error) {
      console.error('Error en la carga del historial:', error);
      this.presentarAlerta("Error", "Ha ocurrido un error al cargar el historial de viajes.");
    }
  }

  async postFlow(detalle: any) {
    const params = {
      apiKey: '1F8DDF83-C842-41A6-8A41-5D848L6E0AC0',
      commerceOrder: `ORDEN${detalle.viaje.id_viaje}`,
      subject: 'Pago de Viaje',
      amount: detalle.viaje.valor_asiento,
      email: detalle.usuario.correo,
      paymentMethod: 9,
      urlConfirmation: 'https://proyecto-semestral-app-web.vercel.app/historialusuario',
      urlReturn: 'https://proyecto-semestral-app-web.vercel.app/historialusuario',
      timeout: 3600,
    };

    try {
      const response = await this.apiFlow.crearOrdenPago(params).toPromise();
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

  async presentarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });
    await alert.present();
  }
}
