import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private activeRoute: ActivatedRoute, private database: DbserviceService) {
    const userId = localStorage.getItem('id');

    database.buscarDatosUsuario(userId).then((datos) => {
      this.usuario = datos[0];
    })
  }

  ngOnInit() {
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });
  }
}