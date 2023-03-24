import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = "José García";

  tituloLibro = "LAS ALMAS DE BRANDON";

  array:string[] = ["Izabal", "Petén", "Quiché", "Sololá", "Zacapa", "Jalapa"];

  pi = Math.PI;

  porcentaje:number = 0.6;

  moneda:number = 10505.40;

  saludo = new Promise( ( resolve , reject )=> {

    setTimeout( () => resolve('Hola Angular'), 2500 );

  })

  fecha = new Date('11/07/2022');
  cadenaBombilla = "Bombillas Pipe";

  bombillas =
  [
    {
      "Bombilla": "LED",
      "Potencia": "13 W",
      "Voltaje": 120,
      "En existencia": true
    },
    {
      "Bombilla": "Flourescente",
      "Potencia": "18 W",
      "Voltaje": 120,
      "En existencia": true
    },
    {
      "Bombilla": "Incandescente",
      "Potencia": "75 W",
      "Voltaje": 120,
      "En existencia": false
    }
  ]
}
