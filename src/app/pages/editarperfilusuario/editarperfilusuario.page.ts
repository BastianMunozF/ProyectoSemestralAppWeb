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
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-editarperfilusuario',
  templateUrl: './editarperfilusuario.page.html',
  styleUrls: ['./editarperfilusuario.page.scss'],
})
export class EditarperfilusuarioPage implements OnInit {

  formularioActualizar: FormGroup;
  usuario: Usuario | undefined;
  image: any;
  imageSource: string | undefined;

  fotoPerfil: string | undefined;

  arregloUsuario: any = [
    {
      id_usuario: '',
      nombre: '',
      apellido: '',
      correo: '',
      fechanacimiento: '',
      rut: '',
      celular: '',
      contrasena: '',
      fotoperfil: '',
    }
  ]

  constructor(private router: Router, private database: DbserviceService, private fb: FormBuilder, public alertController: AlertController) {
    this.formularioActualizar = this.fb.group({
      'nombre': new FormControl(''),
      'apellido': new FormControl(''),
      'correo': new FormControl(''),
      'fechanacimiento': new FormControl(''),
      'rut': new FormControl(''),
      'celular': new FormControl('')
    });
  }

  ngOnInit() {
    let idUser = localStorage.getItem('id');

    this.database.buscarDatosUsuario(idUser).then((datos) => {

      if(datos){

        this.usuario = datos[0];
        this.arregloUsuario = datos;

        this.inicializarFormulario();

      }

    });
  }

  ionViewWillEnter(){
    const idUser = localStorage.getItem('id');

    this.database.buscarDatosUsuario(idUser).then((datos) => {

      if(datos){

        this.usuario = datos[0];
        this.inicializarFormulario();

      }

    });
  }

  private inicializarFormulario(){
    if(this.usuario){
      this.formularioActualizar.patchValue({
        'nombre': this.usuario.nombre || '',
        'apellido': this.usuario.apellido || '',
        'correo': this.usuario.correo || '',
        'fechanacimiento': this.usuario.fechanacimiento || '',
        'rut': this.usuario.rut || '',
        'celular': this.usuario.celular || '',
      })
    }
  }

  takePicture = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Prompt
      });

      if (image && image.dataUrl) {
        this.image = image;
        this.fotoPerfil = image.dataUrl;
      } else {
        console.error('La imagen capturada es indefinida o no tiene dataUrl.');
        this.fotoPerfil = '';
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
      this.fotoPerfil = '';
    }
  }

  onFileChange(event: any) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.fotoPerfil = e.target.result;
      };
      reader.readAsDataURL(selectedFile);
    } else {
      this.fotoPerfil = '';
    }
  }

  actualizarUsuario(){
    if(this.formularioActualizar.valid){
      let form = this.formularioActualizar.value;
      let id = localStorage.getItem('id');
      let foto = this.fotoPerfil || this.usuario?.fotoperfil;

      this.database.actualizarPerfil(form.nombre, form.apellido, form.correo, form.fechanacimiento, form.rut, form.celular, foto, id).then(res => {
        if(res !== null){

          console.log('Datos actualizados correctamente.');
          this.presentarAlerta("Datos actualizados", "Sus datos han sido actualizados con éxito.");
          this.router.navigate(['/perfilusuario']);
          this.usuario = form;
          this.inicializarFormulario();

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
