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
    // Llamar a la función para buscar el usuario en la base de datos
    this.database.buscarCorreo(this.correo, this.contrasena).then(usuario => {
      if (usuario !== null) {
        // Usuario encontrado, almacenar información en el almacenamiento local
        localStorage.setItem('id', usuario.id);
        localStorage.setItem('rol', usuario.id_rol);
  
        // Redirigir al usuario a la página principal
        this.router.navigate(['/menuprincipal']).then(() => {
          this.presentarAlerta("Sesión iniciada", "La sesión ha sido iniciada con éxito.");
        });
      } else {
        // No se encontró un usuario con las credenciales proporcionadas
        this.presentarAlerta("Error al iniciar sesión", "Los datos ingresados son incorrectos");
      }
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