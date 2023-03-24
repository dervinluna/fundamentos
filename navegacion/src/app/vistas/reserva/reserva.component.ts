import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "src/app/servicios/database.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  createFormGroup(){
    return new FormGroup({
      usuario: new FormControl(''),
      email: new FormControl(''),
      pass: new FormControl('')
    });
  }

  formularioUsuario: FormGroup | any;


  constructor(private databaseServ: DatabaseService, private formB : FormBuilder){
    this.construirFormulario();
  }
  ngOnInit(): void {

  }
  resetearFormulario(){
    this.formularioUsuario.reset();
  }
  guardarFormulario(){
    console.log("Formulario valido y Guardado", this.formularioUsuario.value);
    if(this.formularioUsuario.valid){
    this.databaseServ.guardarDatos(this.formularioUsuario.value);
    this.resetearFormulario();

    }else{
      console.log("Formulario no valido");
    }
  }
  expresionRegular =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private construirFormulario(){
    this.formularioUsuario = this.formB.group({
      usuario: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern(this.expresionRegular)]],
      pass: ['', Validators.required, ]
  });
  }

}
