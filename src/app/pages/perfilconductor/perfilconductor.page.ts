import { Component, OnInit } from '@angular/core';
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
  fotoPerfil: string | undefined;
  usuario!: Usuario;
  vehiculo!: Vehiculo;

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

  constructor(private database: DbserviceService) { }

  ngOnInit() {
    let id_user = localStorage.getItem('id');

    this.database.buscarDatosUsuario(id_user);
    this.database.buscarVehiculoUsuario(id_user);

    this.database.fetchUsuarioId().subscribe(datos => {
      if(datos.length > 0){
        console.log('Datos del usuario: ', datos);
        this.arregloUsuario = datos;
      }
    })

    this.database.fetchVehiculoUser().subscribe(datos => {
      console.log('Vehículo del usuario: ', datos);
      this.arregloVehiculo = datos;
    })
  }
}