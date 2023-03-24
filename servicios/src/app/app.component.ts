import { Component } from '@angular/core';
import { VERSION } from '@angular/platform-browser-dynamic';
import { SuscribeService } from './facturacion/suscribe.service';
SuscribeService
import { interval } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicios Angular' + VERSION.major;
  constructor(private suscribeSer:SuscribeService){
  }
  tiempoIntervalo = interval(1000);
  contador:any;

  eventoClick(){
    this.suscribeSer.asignarValor().subscribe((resultado) => {
      console.log(resultado);
    })
  }
  ejecutarSubscribe(){
    this.contador = this.tiempoIntervalo.subscribe((valor) => {
      console.log(valor + "Unsubscribe ejecutado");
    });
  }

  ejecutarUnsubscribe(){
    this.contador.unsubscribe();
    console.log("Unsubscribe ejecutado");
  }

}
