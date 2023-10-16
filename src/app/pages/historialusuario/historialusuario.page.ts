import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historialusuario',
  templateUrl: './historialusuario.page.html',
  styleUrls: ['./historialusuario.page.scss'],
})
export class HistorialusuarioPage implements OnInit {

  fechaviaje: any;
  horasalida: string = "";
  salida: string = "";
  destino: any;

  constructor() { }

  ngOnInit() {
  }

}
