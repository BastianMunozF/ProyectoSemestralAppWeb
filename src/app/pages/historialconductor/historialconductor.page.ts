import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historialconductor',
  templateUrl: './historialconductor.page.html',
  styleUrls: ['./historialconductor.page.scss'],
})
export class HistorialconductorPage implements OnInit {

  fechaviaje: any;
  horasalida: string = "";
  salida: string = "";
  destino: string = "";
  cantidadasientos: string = "";
  valorasiento: string = "";

  constructor() { }

  ngOnInit() {
  }

}
