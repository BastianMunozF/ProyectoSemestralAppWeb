import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfilconductor',
  templateUrl: './perfilconductor.page.html',
  styleUrls: ['./perfilconductor.page.scss'],
})
export class PerfilconductorPage implements OnInit {
  usuarioR: string = "";
  claveR: string = "";
  variableStorage: any = "";

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(param => {
      if(this.router.getCurrentNavigation()?.extras.state){
        this.claveR = this.router.getCurrentNavigation()?.extras?.state?.['']
        this.usuarioR = this.router.getCurrentNavigation()?.extras?.state?.['']
      }
    })

  }

  ngOnInit() {
    this.variableStorage = localStorage.getItem('token');
  }

}
