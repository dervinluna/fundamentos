import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barra-progreso',
  templateUrl: './barra-progreso.component.html',
  styleUrls: ['./barra-progreso.component.css']
})
export class BarraProgresoComponent implements OnInit {


  @Input() progreso:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
