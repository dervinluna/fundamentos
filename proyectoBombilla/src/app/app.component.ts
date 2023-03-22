import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
DomSanitizer
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoBombilla';
  bombillas = [
    {producto: "Bombilla", tipo: "LED", potencia: "10w"},
    {producto: "Bombilla", tipo: "Flourescente", potencia: "18w"},
    {producto: "Bombilla", tipo: "Incandescente", potencia: "75w"}
  ]
}
