import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service'

@Component({
  selector: 'app-listarad',
  templateUrl: './listarad.page.html',
  styleUrls: ['./listarad.page.scss'],
})
export class ListaradPage implements OnInit {

  arregloConductor: any = [
    {
      id: '',
      nombre: '',
      apellido: '',
      edad: '',
      correo: '',
      rut: '',
      fecnac: '',
      celular: '',
      marca: '',
      modelo: '',
      anio: '',
      patente: ''
    }
  ]

  constructor(private bd: DbserviceService, private router: Router) { }

  ngOnInit() {

    this.bd.dbState().subscribe(res=>{
      if(res){
        this.bd.fetchConductor().subscribe(datos=>{
          this.arregloConductor = datos;
        })
      }
    })
  }

  modificar(x:any){
    let navigationExtras: NavigationExtras = {
      state: {
        idEnviado: x.id,
        nombreEnviado: x.nombre,
        apellidoEnviado: x.apellido,
        edadEnviado: x.edad,
        correoEnviado: x.correo,
        rutEnviado: x.rut,
        fecnacEnviado: x.fecnac,
        celularEnviado: x.celular,
        marcaEnviado: x.marca,
        modeloEnviado: x.modelo,
        anioEnviado: x.anio,
        patenteEnviado: x.patente
      }
    }
    this.router.navigate(['/modificar'], navigationExtras);
  }

  eliminar(x:any){
    this.bd.eliminarConductor(x.id);
    this.bd.presentAlert("Conductor Eliminado");
  }

}

