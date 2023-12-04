import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'; 
import { DbserviceService } from 'src/app/services/dbservice.service';
import { Usuario } from 'src/app/services/usuario';
import { Vehiculo } from 'src/app/services/vehiculo';

@Component({
  selector: 'app-perfilconductor',
  templateUrl: './perfilconductor.page.html',
  styleUrls: ['./perfilconductor.page.scss'],
})
export class PerfilconductorPage implements OnInit {
  image: any;
  imageSource: string | undefined;
  usuario!: Usuario;
  vehiculo!: Vehiculo;

  //Variables para guardar datos del usuario
  nombre: string = "";
  apellido: string = "";
  correo: string = "";
  fechanacimiento: any;
  rut: string = "";
  celular: any;

  //Variables para guardar datos del vehiculo del usuario
  marca: any;
  modelo: any;
  annio: any;
  patente: any;
  asientos: any;
  tipo_vehiculo: any;
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
    });

    this.database.buscarVehiculoUsuario(userId).then((perfil) => {
      this.vehiculo = perfil[0];

      this.marca = this.vehiculo.marca;
      this.modelo = this.vehiculo.modelo;
      this.annio = this.vehiculo.anio;
      this.patente = this.vehiculo.patente;
      this.asientos = this.vehiculo.asientos;
      this.tipo_vehiculo = this.vehiculo.id_tipo;
    });
  }

  ngOnInit() {
  }
}
