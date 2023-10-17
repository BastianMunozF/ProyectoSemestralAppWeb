import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historialusuario',
  templateUrl: './historialusuario.page.html',
  styleUrls: ['./historialusuario.page.scss'],
})
export class HistorialusuarioPage implements OnInit {

  arregloHistorial: any = [
    {
      id_viajeuser: '',
      fechaviaje: '',
      horasalida: '',
      salida: '',
      destino: ''
    }
  ]

  constructor(private database: DbserviceService, private router: Router) { }

  ngOnInit() {
    this.database.dbState().subscribe(res => {
      if(res){
        this.database.fetchViajeUser().subscribe(datos => {
          this.arregloHistorial = datos;
        })
      }
    })
  }

}
