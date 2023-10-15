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

  constructor(public fb: FormBuilder,  public alertController: AlertController, public router: Router, private database: DbserviceService) { 

    this.formularioLogin = this.fb.group({
      'correo': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'contrasena': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)])
    })
  }

  ngOnInit() {
  }

  iniciarSesion() {
    if (this.formularioLogin.valid) {
      let form = this.formularioLogin.value;

      console.log('Formulario de inicio de sesión:', form);

      this.database.buscarCorreo(form.correo, form.contrasena).then((datos) => {
        console.log('Datos de la base de datos:', datos);

        if (datos && datos.length > 0) {
          this.usuario = datos[0];

          if (form.correo === this.usuario.correo && form.contrasena === this.usuario.contrasena) {
            console.log('Sesión iniciada con éxito');
            this.presentarAlerta("Sesión iniciada", "El inicio de sesión ha sido exitoso.");
            this.router.navigate(['/menuprincipal']);
            this.formularioLogin.reset();
          } else {
            console.log('Contraseña incorrecta');
            this.presentarAlerta("Error al iniciar sesión", "La contraseña es incorrecta.");
          }
        } else {
          console.log('Correo no encontrado');
          this.presentarAlerta("Error al iniciar sesión", "El correo no se encuentra registrado.");
        }
      });
    } else {
      this.presentarAlerta("Error", "Rellena el formulario correctamente.");
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