import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'; 
import { from } from 'rxjs';

@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.page.html',
  styleUrls: ['./perfilusuario.page.scss'],
})
export class PerfilusuarioPage implements OnInit {
  usuarioR: string = "";
  claveR: string = "";
  variableStorage: any = "";

  //Variables para guardar los datos del Usuario
  nombreU: string = "";
  apellidoU: string = "";
  rutU: string = "";
  edadU!: number;
  correoU: string = "";
  celularU!: number;
  image: any;
  imageSource: string | undefined;

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(param => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.claveR = this.router.getCurrentNavigation()?.extras?.state?.['']
        this.usuarioR = this.router.getCurrentNavigation()?.extras?.state?.['']
      }
    })
  }

  ngOnInit() {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString !== null){
      const usuario = JSON.parse(usuarioString);
      this.nombreU = usuario.nombre;
      this.apellidoU = usuario.apellido;
      this.rutU = usuario.rut;
      this.edadU = usuario.edad;
      this.correoU = usuario.correo;
      this.celularU = usuario.celular;
    }
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