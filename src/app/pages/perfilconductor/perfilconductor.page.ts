import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfilconductor',
  templateUrl: './perfilconductor.page.html',
  styleUrls: ['./perfilconductor.page.scss'],
})
export class PerfilconductorPage implements OnInit {
  usuarioR: string = "";
  claveR: string = "";
  variableStorage: any = "";

  //Variables para guardar datos del Conductor.
  nombreC: string = "";
  apellidoC: string = "";
  edadC: string = "";
  correoC: string = "";
  rutC: string = "";
  fecnacC!: Date;
  celularC!: number;
  marcavehiculoC: string = "";
  modelovehiculoC: string = "";
  aniovehiculoC!: number;
  patentevehiculoC: string = "";

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
      this.nombreC = usuario.nombre;
      this.apellidoC = usuario.apellido;
      this.edadC = usuario.edad;
      this.correoC = usuario.correo;
      this.rutC = usuario.rut;
      this.fecnacC = usuario.fecnac;
      this.celularC = usuario.celular;
      this.marcavehiculoC = usuario.marca;
      this.modelovehiculoC = usuario.modelo;
      this.aniovehiculoC = usuario.anio;
      this.patentevehiculoC = usuario.patente;
    }

    this.variableStorage = localStorage.getItem('token');
  }

}
