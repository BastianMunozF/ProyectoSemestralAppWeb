import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vistaperfil',
  templateUrl: './vistaperfil.page.html',
  styleUrls: ['./vistaperfil.page.scss'],
})
export class VistaperfilPage implements OnInit {

  nombre: string = "";

  constructor() { }

  ngOnInit() {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString !== null){
      const usuario = JSON.parse(usuarioString);
      this.nombre = usuario.nombre;
    }
  }
}
