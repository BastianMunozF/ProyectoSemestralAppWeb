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
  selector: 'app-editarperfilusuario',
  templateUrl: './editarperfilusuario.page.html',
  styleUrls: ['./editarperfilusuario.page.scss'],
})
export class EditarperfilusuarioPage implements OnInit {

  usuario!: Usuario;

  //Variables para guardar datos del usuario
  nombre: string = "";
  apellido: string = "";
  correo: string = "";
  fechanacimiento: any;
  rut: string = "";
  celular: any;

  formularioActualizar: FormGroup;

  constructor(private router: Router, private database: DbserviceService, private fb: FormBuilder, public alertController: AlertController) {

    const idUser = localStorage.getItem('id');
    database.buscarDatosUsuario(idUser).then((datos) => {
      this.usuario = datos[0];

      this.nombre = this.usuario.nombre;
      this.apellido = this.usuario.apellido;
      this.correo = this.usuario.correo;
      this.fechanacimiento = this.usuario.fechanacimiento;
      this.rut = this.usuario.rut;
      this.celular = this.usuario.celular;

    })

    this.formularioActualizar = this.fb.group({
      'nombre': new FormControl("", [Validators.required]),
      'apellido': new FormControl("", [Validators.required]),
      'correo': new FormControl("", [Validators.required]),
      'fechanacimiento': new FormControl("", [Validators.required]),
      'rut': new FormControl("", [Validators.required]),
      'celular': new FormControl("", [Validators.required])
    })
  }

  ngOnInit() {
  }

  actualizarUsuario(){
    if(this.formularioActualizar.valid){
      let form = this.formularioActualizar.value;
      let id = localStorage.getItem('id')

      this.database.actualizarPerfil(form.nombre, form.apellido, form.correo, form.fechanacimiento, form.rut, form.celular, id).then(res => {
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
