import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registrarvehiculo',
  templateUrl: './registrarvehiculo.page.html',
  styleUrls: ['./registrarvehiculo.page.scss'],
})
export class RegistrarvehiculoPage implements OnInit {
  formularioVehiculo: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formularioVehiculo = this.formBuilder.group({
      marca: new FormControl("", [Validators.required]),
      modelo: new FormControl("", [Validators.required]),
      annio: new FormControl("", [Validators.required]),
      patente: new FormControl("", [Validators.required]),
    });
   }

  ngOnInit() {
  }

}
