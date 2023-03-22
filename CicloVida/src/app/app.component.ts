import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'cicloVida';

  progresoContador:number = 0;
  totalContador:number = 10;

  constructor(){}

  actualizarProgreso($event: any){
    this.progresoContador = (this.totalContador - $event)/this.totalContador * 100;
  }

  cuentaRegresivaTerminada(){
    console.log("La cuenta regresiva ha terminado");
  }
}
