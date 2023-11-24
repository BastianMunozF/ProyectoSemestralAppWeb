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
    const idUser = localStorage.getItem('id');

    this.database.buscarDatosUsuario(idUser).then((datos) => {
    this.usuario = datos[0];

    this.nombreU = this.usuario.nombre;
    this.apellidoU = this.usuario.apellido;
    this.correoU = this.usuario.correo;
    this.fechanacimientoU = this.usuario.fechanacimiento;
    this.rutU = this.usuario.rut;
    this.celularU = this.usuario.celular;
    this.contrasenaU = this.usuario.contrasena;
    this.fotoPerfil = this.usuario.fotoperfil;
    });

    this.database.buscarVehiculoUsuario(idUser).then(res => {
      if(res !== null){
        this.vehiculo = res[0];

        this.marca = this.vehiculo.marca;
        this.modelo = this.vehiculo.modelo;
        this.anio = this.vehiculo.anio;
        this.patente = this.vehiculo.patente;
        this.asientos = this.vehiculo.asientos;
      }
    })

    this.formularioActualizar = this.fb.group({
      'nombre': new FormControl(this.nombreU, []),
      'apellido': new FormControl(this.apellidoU, []),
      'correo': new FormControl(this.correoU, []),
      'fechanacimiento': new FormControl(this.fechanacimientoU, []),
      'rut': new FormControl(this.rutU, []),
      'celular': new FormControl(this.celularU, []),
      'contrasena': new FormControl(this.contrasenaU, []),
      'fotoperfil': new FormControl(this.fotoPerfil, []),
      'marca': new FormControl(this.marca, []),
      'modelo': new FormControl(this.modelo, []),
      'anio': new FormControl(this.anio, []),
      'patente': new FormControl(this.patente, []),
      'asientos': new FormControl(this.asientos, []),
    })
  }

  ngOnInit() {
  }

  actualizarUsuario(){
    if(this.formularioActualizar.valid){
      let form = this.formularioActualizar.value;
      let id = localStorage.getItem('id')

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
