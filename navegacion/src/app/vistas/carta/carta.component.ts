import{ Component, OnInit, Input } from '@angular/core';
import{Imagen } from 'src/app/models/imagen';
@Component({
selector: 'carta',
templateUrl: './carta.component.html',
styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
constructor() {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
OnInit(): void {}
imagenMenu : Imagen [] = [
 new Imagen("1", "Camarones al ajillo",  "Mariscos", "Q.40.00", "../assets/img/Camarones_al_ajillo.png"),
 new Imagen("2", "Hamburguesa", "Refacción", "Q.30.00", "../assets/img/hamburguesa.png"),
 new Imagen("3", "Jugo de naranja", "Bebida natural", "Q.10.00", "../assets/img/Jugo_de_naranja.png"),
 new Imagen("4", "Pay de limón", "Postre", "Q.8.00", "../assets/img/Pie_de_limon.png"),
 new Imagen("5", "Sopa minestrone", "Entrada", "Q.5.00", "../assets/img/Sopa_minestrone.png"),
 new Imagen("6", "José Cuervo", "Tequila", "Q.180.00", "../assets/img/Tequila_jose_cuervo_especial.png"),
]

}
