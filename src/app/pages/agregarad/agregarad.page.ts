import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-agregarad',
  templateUrl: './agregarad.page.html',
  styleUrls: ['./agregarad.page.scss'],
})
export class AgregaradPage implements OnInit {
  nombreConductor = "";
  apellidoConductor = "";
  edadConductor = "";
  correoConductor = "";
  rutConductor = "";
  fecnacConductor = "";
  celularConductor = "";
  marcaConductor = "";
  modeloConductor = "";
  anioConductor = "";
  patenteConductor = "";
  contrasenaConductor = "";
  confcontrasenaConductor = "";

  constructor(public router:Router, private db: DbserviceService) { }

  insertar(){
    this.db.insertarConductor(this.nombreConductor, this.apellidoConductor, this.edadConductor, this.correoConductor, this.rutConductor, this.fecnacConductor, this.celularConductor, this.marcaConductor, this.modeloConductor, this.anioConductor, this.patenteConductor, this.contrasenaConductor, this.confcontrasenaConductor);
    this.db.presentAlert("Noticia Agregada");
    this.router.navigate(['/listar']);
    
  }

  ngOnInit() {
  }

}
