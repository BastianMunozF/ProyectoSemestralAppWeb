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

  constructor(public fb: FormBuilder,  public alertController: AlertController, public router: Router, private database: DbserviceService) { 

    this.formularioLogin = this.fb.group({
      'correo': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      'contrasena': new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)])
    })
  }

  ngOnInit() {
  }

  iniciarSesion() {
    const user = this.formularioLogin.value;
    
    // Validación de entrada
    if (!user.correo || !user.contrasena) {
      this.presentarAlerta("Error al iniciar sesión", "Por favor, complete todos los campos.");
      return;
    }
  
    this.database.buscarCorreo(user.correo, user.contrasena)
      .then(usuario => {
        if (usuario === true) {
          // Sesión iniciada con éxito
          this.presentarAlerta("Sesión iniciada", "Ha iniciado sesión correctamente.");
          this.router.navigate(['/menuprincipal']);
          this.formularioLogin.reset();
        } else {
          // Datos de inicio de sesión incorrectos
          this.presentarAlerta("Error al iniciar sesión", "Los datos ingresados no existen o la contraseña es incorrecta.");
        }
      })
      .catch(error => {
        // Manejo de errores
        console.error("Error al buscar usuario en la base de datos:", error);
        this.presentarAlerta("Error al iniciar sesión", "Ocurrió un error al iniciar sesión. Por favor, inténtelo de nuevo más tarde.");
      });
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