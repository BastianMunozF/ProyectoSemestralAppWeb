import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { Usuario } from 'src/app/services/usuario';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.page.html',
  styleUrls: ['./perfilusuario.page.scss'],
})
export class PerfilusuarioPage implements OnInit {

  //Variables para guardar los datos del Usuario
  image: any;
  imageSource: string | undefined;
  usuario!: Usuario;

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

  constructor(private database: DbserviceService, private alertController: AlertController) { }

  ngOnInit() {

    let id_user = localStorage.getItem('id')
    this.database.buscarDatosUsuario(id_user);

    //Suscribir a observable de la base de datos.
    this.database.fetchUsuarioId().subscribe(datos => {
      if(datos.length > 0){

        console.log('Datos del usuario: ', datos);
        this.arregloUsuario = datos;

      } else {

        console.log('Datos no encontrados.');

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