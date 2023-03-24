import { Injectable } from '@angular/core';
import { datosInterfaz } from "../models/datos.interface";
import { Observable } from "rxjs";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private usuarioColeccion: AngularFirestoreCollection<datosInterfaz>;


  constructor(private afs: AngularFirestore) {
    this.usuarioColeccion = afs.collection<datosInterfaz>('usuarios')

  }
  guardarDatos(nuevoUsuario: datosInterfaz): void {
    this.usuarioColeccion.add(nuevoUsuario);
   }
}
