import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {
  formularioPago: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.formularioPago = this.formBuilder.group({
      'nombre': new FormControl("", [Validators.required]),
      'apellido': new FormControl("", [Validators.required]),
      'numerot': new FormControl("", [Validators.required]),
      'fecha': new FormControl("", [Validators.required]),
      'cvv': new FormControl("", [Validators.required]),
      
    });
  }

  efectuarPago(){
    
  }

  ngOnInit() {
  }

}
