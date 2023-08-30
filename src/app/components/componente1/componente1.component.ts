import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss'],
})
export class Componente1Component  implements OnInit {

  precios: any = {
    standard: 3000,
    large: 4500,
    deluxe: 9000
  }

  constructor() { }

  ngOnInit() {}

}
