import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginarecuperar-usuario',
  templateUrl: './paginarecuperar-usuario.page.html',
  styleUrls: ['./paginarecuperar-usuario.page.scss'],
})
export class PaginarecuperarUsuarioPage implements OnInit {

  formularioRecuperar: FormGroup;
  correoU: string = "";
  contrasenaU: string = "";

  constructor(private fb: FormBuilder, private database: DbserviceService, private alertController: AlertController, private router: Router) {
    this.formularioRecuperar = this.fb.group({
      'correo': new FormControl("", [Validators.required]),
      'rut': new FormControl("", [Validators.required]),
      'contrasena': new FormControl("", [Validators.required]),
      'confcontrasena': new FormControl("", [Validators.required])
    });
  }

  recuperarContrasena(){
    if(this.formularioRecuperar.valid){
      let form = this.formularioRecuperar.value;

      this.database.recuperarBuscar(form.correo, form.rut).then(result => {
        if(result.rows.length > 0){
          this.database.recuperarUsuario(form.contrasena, form.correo, form.rut).then(res => {
            if(res !== null){
              console.log('Contraseña actualizada correctamente.');
              this.router.navigate(['/paginalogin-usuario']).then(() => {
                this.presentarAlerta("Contraseña recuperada", "La contraseña que ha ingresado ha sido actualizada.");
              })
              this.formularioRecuperar.reset();
            } else {
              console.log('Error al recuperar contraseña.');
              this.presentarAlerta("Error al recuperar contraseña", "El correo o rut no corresponden a la cuenta.");
            }
          }).catch(error => {
            console.error("Error en base de datos al recuperar contraseña: ", error)
          })
        }else {
          console.log('Error al recuperar contraseña.');
          this.presentarAlerta("Error al recuperar contraseña", "El correo o rut no corresponden a la cuenta.");
        }
      }).catch(error => {
        console.error('Error al recuperar contraseña:', error)
      })
    }
  }

  ngOnInit() {
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
