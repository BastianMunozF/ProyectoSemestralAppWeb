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

  //Variables para guardar datos del usuario
  nombre: string = "";
  apellido: string = "";
  correo: string = "";
  fechanacimiento: any;
  rut: string = "";
  celular: any;
  fotoPerfil: string | undefined;

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

    //Suscribir a observable de la base de datos.
    this.database.dbState().subscribe(res => {
      if(res){
        console.log('Estado de la base de datos: ', res)
        this.database.fetchUsuarioId().subscribe(datos => {
          if(datos.length > 0){
            this.arregloUsuario = datos;
          } else {
            this.presentarAlerta("Datos no encontrados", "No han sido encontrados sus datos de usuario.");
          }
        })
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