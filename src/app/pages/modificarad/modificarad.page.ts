import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-modificarad',
  templateUrl: './modificarad.page.html',
  styleUrls: ['./modificarad.page.scss'],
})
export class ModificaradPage implements OnInit {
  idConductor = "";
  nombreConductor = "";
  apellidoConductor = "";
  edadConductor = "";
  correoConductor = "";
  rutConductor = "";
  fecnacConductor = "";
  celularConductor = "";
  contrasenaConductor = "";

  constructor(private router: Router, private activedRouter: ActivatedRoute, private bd: DbserviceService) {
    this.activedRouter.queryParams.subscribe(res => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.idConductor = this.router.getCurrentNavigation()?.extras?.state?.['idEnviado'];

        this.nombreConductor = this.router.getCurrentNavigation()?.extras?.state?.['nombreEnviado'];

        this.apellidoConductor = this.router.getCurrentNavigation()?.extras?.state?.['apellidoEnviado'];

        this.edadConductor = this.router.getCurrentNavigation()?.extras?.state?.['edadEnviado'];

        this.correoConductor = this.router.getCurrentNavigation()?.extras?.state?.['correoEnviado'];

        this.rutConductor = this.router.getCurrentNavigation()?.extras?.state?.['rutEnviado'];

        this.fecnacConductor = this.router.getCurrentNavigation()?.extras?.state?.['fecnacEnviado'];

        this.celularConductor = this.router.getCurrentNavigation()?.extras?.state?.['celularEnviado'];

        this.contrasenaConductor = this.router.getCurrentNavigation()?.extras?.state?.['contrasenaEnviado'];
      }
    })
   }

   editar(){
    this.bd.actualizarConductor(this.idConductor, this.nombreConductor, this.apellidoConductor, this.edadConductor, this.correoConductor, this.rutConductor, this.fecnacConductor, this.celularConductor, this.contrasenaConductor)
    this.bd.presentAlert("Noticia Actualizada");
    this.router.navigate(['/listar']);
   }

  ngOnInit() {
  }

}
