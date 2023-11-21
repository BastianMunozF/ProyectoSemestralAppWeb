import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'; 
import { DbserviceService } from 'src/app/services/dbservice.service';
import { Usuario } from 'src/app/services/usuario';

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

  constructor(private database: DbserviceService) {
    const userId = localStorage.getItem('id')


    this.database.buscarDatosUsuario(userId).then((perfil) => {
      this.usuario = perfil[0];

      this.nombre = this.usuario.nombre;
      this.apellido = this.usuario.apellido;
      this.correo = this.usuario.correo;
      this.fechanacimiento = this.usuario.fechanacimiento;
      this.rut = this.usuario.rut;
      this.celular = this.usuario.celular;
      this.fotoPerfil = this.usuario.fotoperfil;
    })
  }

  ngOnInit() {
  }
}