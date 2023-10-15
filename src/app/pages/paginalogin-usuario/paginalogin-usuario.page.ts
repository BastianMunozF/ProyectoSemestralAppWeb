import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { Busuario } from 'src/app/services/busuario';

@Component({
  selector: 'app-paginalogin-usuario',
  templateUrl: './paginalogin-usuario.page.html',
  styleUrls: ['./paginalogin-usuario.page.scss'],
})
export class PaginaloginUsuarioPage implements OnInit {

  formularioLogin: FormGroup;
  correo: string = "";
  contrasena: string = "";
  user: string = "";
  usuario!: Busuario;

  idActual: number | null = null;

  constructor(public fb: FormBuilder,  public alertController: AlertController, public router: Router, private database: DbserviceService) { 

    this.formularioLogin = this.fb.group({
      'correo': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'contrasena': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)])
    })

    const idActual = localStorage.getItem('id')
    if(idActual){
      this.idActual =+ idActual
    }
  }

  ngOnInit() {
  }

  async iniciarSesion() {
    if(this.formularioLogin.valid){
      const correo = this.correo
      const contrasena = this.contrasena

      const usuarioValido = await this.database.buscarCorreo(correo, contrasena);

      if(usuarioValido){
        const usuario = await this.database.buscarId(correo);

        if(usuario !== null){
          this.idActual = usuario

          localStorage.setItem('id', this.usuario.toString());
        }
        this.presentarAlerta("Sesión iniciada", "La sesión ha sido iniciada con éxito.");
        this.router.navigate(['/menuprincipal'])
      } else {
        this.presentarAlerta("Error al iniciar sesión", "Los datos ingresados son incorrectos.")
      }
    }
  }

  async presentarAlerta(titulo: string, mensaje: string){
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
/*
async ingresar() {
  var f = this.formularioLogin.value;
  var usuarioString = localStorage.getItem('usuario');

  if (usuarioString !== null) {
    var usuario = JSON.parse(usuarioString);
    if (usuario.nombre == f.nombre && usuario.password == f.password) {
      console.log('Ingresado');
      localStorage.setItem('ingresado', 'true');
      this.router.navigate(['/menuprincipal']);
    } else {
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos ingresados no coinciden.',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }
}
*/