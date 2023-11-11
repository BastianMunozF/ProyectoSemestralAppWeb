import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/services/dbservice.service';

@Component({
  selector: 'app-modificarcontrasena',
  templateUrl: './modificarcontrasena.page.html',
  styleUrls: ['./modificarcontrasena.page.scss'],
})

export class ModificarcontrasenaPage implements OnInit {

  formularioContrasena: FormGroup;

  constructor(private database: DbserviceService, private alertController: AlertController, private fb: FormBuilder, private router: Router) {
    this.formularioContrasena = this.fb.group({
      'actual': new FormControl("", [Validators.required]),
      'nueva': new FormControl("", [Validators.required]),
      'confnueva': new FormControl("", [Validators.required])
    })
  }

  cambiarContrsena(){
    if(this.formularioContrasena.valid){
      let form = this.formularioContrasena.value;
      let id_user = localStorage.getItem('id');

      if(form.nueva === form.confnueva){
        this.database.verificarContrasena(id_user).then(contrasena => {
          if(contrasena){
            this.database.actualizarContrasena(form.nueva, id_user).then(res => {
              if(res){
                this.presentarAlerta("Contraseña Actualizada", "Su contraseña ha sido actualizada con éxito.");
                this.router.navigate(['/perfilusuario']);

                this.formularioContrasena.reset();
              } else {
                this.presentarAlerta("Error al actualizar contraseña", "La contraseña actual ingresada no existe.");
              }
            }).catch(e => {
              console.error('Ha ocurrido un error al actualizar contraseña: ', + e)
            })
          } else {
            this.presentarAlerta("Contraseña incorrecta", "La contraseña actual ingresada no coincide.")
          }
        }).catch(e => {
          console.error('Ha ocurrido un error al verificar contrasena: ', + e)
        })
      } else {
        this.presentarAlerta("Contraseñas incorrectas", "Las contraseñas ingresadas no coinciden.")
      }
    }
  }

  async presentarAlerta(titulo: string, msj: string){
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
