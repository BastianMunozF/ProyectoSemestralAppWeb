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
  contrasenaConductor = "";

  constructor(public router:Router, private db: DbserviceService) { }

  insertar(){
    this.db.insertarConductor(this.nombreConductor, this.apellidoConductor, this.edadConductor, this.correoConductor, this.rutConductor, this.fecnacConductor, this.celularConductor, this.contrasenaConductor);
    this.db.presentAlert("Noticia Agregada");
    this.router.navigate(['/listar']);
    
  }

  ngOnInit() {
  }

}
