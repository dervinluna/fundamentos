import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cuenta-regresiva',
  templateUrl: './cuenta-regresiva.component.html',
  styleUrls: ['./cuenta-regresiva.component.css']
})
export class CuentaRegresivaComponent implements OnInit {

  ngOnInit(): void {
    this.iniciarCuentaRegresiva();
  }

  @Output() enDisminucion = new EventEmitter<number>();
  @Output() enCompleto = new EventEmitter<void>();

  @Input() iniciar: number | undefined;

  constructor() {
  }

  public contador:number = 0;
  private contadorTiempoRef:any = null;

  iniciarCuentaRegresiva(){
    if(this.iniciar && this.iniciar >0)
    {
      this.limpiarTiempoSalida();
      this.contador = this.iniciar;
      this.ejecutarCuentaRegresiva();
    }
  }

  ejecutarCuentaRegresiva(){
    this.contadorTiempoRef = setTimeout(()=>{
      this.contador = this.contador -1;
      this.procesoCuentaRegresiva();
    },1000);
  }

private limpiarTiempoSalida() {
  if(this.contadorTiempoRef){
    clearTimeout(this.contadorTiempoRef);
    this.contadorTiempoRef = null;
  }

}

  procesoCuentaRegresiva(){
    this.enDisminucion.emit(this.contador);

    console.log("El contador es ", this.contador);

    if(this.contador == 0){
      this.enCompleto.emit();

      console.log("FIN del contador");
    }
    else{
      this.ejecutarCuentaRegresiva();
    }
  }

}
