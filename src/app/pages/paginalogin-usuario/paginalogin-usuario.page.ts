import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
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

  constructor(public fb: FormBuilder, public alertController: AlertController, public router: Router, private database: DbserviceService) { 

    this.formularioLogin = this.fb.group({
      'correo': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'contrasena': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)])
    })

  }

  ngOnInit() {
  }

  iniciarSesion() {
    if(this.formularioLogin.valid){
      this.database.buscarCorreo(this.correo, this.contrasena).then(usuario => {
        if(usuario !== null){
          localStorage.setItem('id', usuario.id);
          localStorage.setItem('rol', usuario.id_rol.toString());

          let user_rol = localStorage.getItem('rol')?.toString();

          if(user_rol === '1'){
            this.router.navigate(['/menuprincipal']).then(() => {
              this.presentarAlerta("Sesión iniciada", "La sesión ha sido iniciada con éxito.");
            })
          } else if (user_rol = '2'){
            this.router.navigate(['/menuprincipalconductor']).then(() => {
              this.presentarAlerta("Sesión iniciada", "La sesión de conductor ha sido iniciada con éxito.");
            })
          } else {
            this.presentarAlerta("Error al iniciar sesión", "Los datos ingresados no existen.")
          }
          
          this.formularioLogin.reset();
        } else {
          this.presentarAlerta("Error al iniciar sesión", "Los datos ingresados no son correctos.")
        }
      })
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