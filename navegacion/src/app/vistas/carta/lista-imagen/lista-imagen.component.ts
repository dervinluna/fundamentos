import { Component, OnInit, Input } from '@angular/core';
import { Imagen } from 'src/app/models/imagen';

@Component({
  selector: 'app-lista-imagen',
  templateUrl: './lista-imagen.component.html',
  styleUrls: ['./lista-imagen.component.css']
})
export class ListaImagenComponent implements OnInit{
  @Input() imagenDevolucion: Imagen | any;
  constructor(){

  }
  ngOnInit(): void {

  }

}
