import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/services/usuario';

@Component({
  selector: 'app-editarperfilconductor',
  templateUrl: './editarperfilconductor.page.html',
  styleUrls: ['./editarperfilconductor.page.scss'],
})
export class EditarperfilconductorPage implements OnInit {

  usuario!: Usuario;

  //Variables para guardar datos del usuario
  nombreU: string = "";
  apellidoU: string = "";
  correoU: string = "";
  fechanacimientoU: any;
  rutU: string = "";
  celularU: any;
  contrasenaU: any;

  formularioActualizar: FormGroup;

  constructor(private database: DbserviceService, private fb: FormBuilder, private router: Router, private alertController: AlertController) {
    const idUser = localStorage.getItem('id');
    this.database.buscarDatosUsuario(idUser).then((datos) => {
    this.usuario = datos[0];

    this.nombreU= this.usuario.nombre;
    this.apellidoU = this.usuario.apellido;
    this.correoU = this.usuario.correo;
    this.fechanacimientoU = this.usuario.fechanacimiento;
    this.rutU = this.usuario.rut;
    this.celularU = this.usuario.celular;
    this.contrasenaU = this.usuario.contrasena;

    })

    this.formularioActualizar = this.fb.group({
      'nombre': new FormControl("", [Validators.required]),
      'apellido': new FormControl("", [Validators.required]),
      'correo': new FormControl("", [Validators.required]),
      'fechanacimiento': new FormControl("", [Validators.required]),
      'rut': new FormControl("", [Validators.required]),
      'celular': new FormControl("", [Validators.required]),
      'contrasena': new FormControl("", [Validators.required])
    })
  }

  ngOnInit() {
  }

  actualizarUsuario(){
    if(this.formularioActualizar.valid){
      let form = this.formularioActualizar.value;
      let id = localStorage.getItem('id')

      this.database.actualizarPerfil(form.nombre, form.apellido, form.correo, form.fechanacimiento, form.rut, form.celular, form.contrasena, id).then(res => {
        if(res !== null){
          console.log('Datos actualizados correctamente.');
          this.presentarAlerta("Datos actualizados", "Sus datos han sido actualizados con éxito.")
          this.router.navigate(['/perfilusuario'])
          this.formularioActualizar.reset();
        } else {
          console.log("Error al actualizar datos");
          this.presentarAlerta("Error al actualizar datos", "Rellene el formulario correctamente.")
        }
      }).catch(error => {
        console.error("Error en base de datos al actualizar datos: ", error)
      })
    } else {
      this.presentarAlerta("Error en formulario", "Rellene el formulario correctamente.")
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
