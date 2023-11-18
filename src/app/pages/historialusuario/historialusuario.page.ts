import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historialusuario',
  templateUrl: './historialusuario.page.html',
  styleUrls: ['./historialusuario.page.scss'],
})
export class HistorialusuarioPage implements OnInit {

  arregloHistorial: any;
  id_usuario = localStorage.getItem('id');

  constructor(private database: DbserviceService, private router: Router) { }

  ngOnInit() {
    /*
    this.database.buscarViajeUser(this.id_usuario).then(res => {
      this.arregloHistorial = res;
    });
    */
  }

}
