import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder
} from '@angular/forms';
import { DbserviceService } from 'src/app/services/dbservice.service';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/services/usuario';
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';
import { Vehiculo } from 'src/app/services/vehiculo';

@Component({
  selector: 'app-editarperfilconductor',
  templateUrl: './editarperfilconductor.page.html',
  styleUrls: ['./editarperfilconductor.page.scss'],
})
export class EditarperfilconductorPage implements OnInit {

  usuario!: Usuario;
  vehiculo!: Vehiculo;

  //Variables para guardar datos del usuario
  nombreU: string = "";
  apellidoU: string = "";
  correoU: string = "";
  fechanacimientoU: any;
  rutU: string = "";
  celularU: any;
  contrasenaU: any;
  fotoPerfil: string | undefined;
  image: any;
  imageSource: string | undefined;

  //Variables para guardar datos del vehiculo del usuario
  modelo: string = "";
  marca: string = "";
  anio: any;
  patente: any;
  asientos: any;

  formularioActualizar: FormGroup;

  constructor(private database: DbserviceService, private fb: FormBuilder, private router: Router, private alertController: AlertController) {

    this.formularioActualizar = this.fb.group({
      'nombre': new FormControl(this.usuario.nombre, []),
      'apellido': new FormControl(this.usuario.apellido, []),
      'correo': new FormControl(this.usuario.correo, []),
      'fechanacimiento': new FormControl(this.usuario.fechanacimiento, []),
      'rut': new FormControl(this.usuario.rut, []),
      'celular': new FormControl(this.usuario.celular, []),
      'fotoperfil': new FormControl(this.usuario.fotoperfil, []),
      'marca': new FormControl(this.vehiculo.marca, []),
      'modelo': new FormControl(this.vehiculo.modelo, []),
      'anio': new FormControl(this.vehiculo.anio, []),
      'patente': new FormControl(this.vehiculo.patente, []),
      'asientos': new FormControl(this.vehiculo.asientos, []),
    })
  }

  ngOnInit() {

    const idUser = localStorage.getItem('id');

    this.database.buscarDatosUsuario(idUser).then((datos) => {

      if(datos !== null){

        this.usuario = datos[0];

      }

    });

    this.database.buscarVehiculoUsuario(idUser).then(res => {
      if(res !== null){

        this.vehiculo = res[0];

      }
    });

  }

  actualizarUsuario(){
    if(this.formularioActualizar.valid){
      let form = this.formularioActualizar.value;
      let id = localStorage.getItem('id');

      this.database.actualizarPerfil(form.nombre, form.apellido, form.correo, form.fechanacimiento, form.rut, form.celular, form.fotoperfil, id).then(res => {
        if(res !== null){

          this.database.actualizarVehiculo(form.marca, form.modelo, form.anio, form.patente, form.asientos, id).then(res => {
            if(res !== null){

              console.log('Datos actualizados correctamente.');
              this.presentarAlerta("Datos actualizados", "Sus datos han sido actualizados con éxito.");
              this.router.navigate(['/perfilusuario']);
              this.formularioActualizar.reset();

            }
          })

        } else {

          console.log("Error al actualizar datos");
          this.presentarAlerta("Error al actualizar datos", "Rellene el formulario correctamente.");

        }
      }).catch(error => {

        console.error("Error en base de datos al actualizar datos: ", error);

      })

    } else {

      this.presentarAlerta("Error en formulario", "Rellene el formulario correctamente.");

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

  async presentarAlerta(titulo: string, mensaje: string){
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
