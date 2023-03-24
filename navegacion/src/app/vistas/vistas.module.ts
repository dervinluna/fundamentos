import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaComponent } from './carta/carta.component';
import { HomeComponent } from './home/home.component';
import { SalonesComponent } from './salones/salones.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { RutasVistasModule } from './rutas-vistas.module';
import { ReservaComponent } from './reserva/reserva.component';
import { SesionComponent } from './sesion/sesion.component';
import { ContactoComponent } from './contacto/contacto.component';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { environment } from "C:/Users/dervi/Desktop/Angular/navegacion/src/environments/environment";
import { AngularFireModule } from "@angular/fire/compat"
import { AngularFirestoreModule } from "@angular/fire/compat/firestore"
import { DatabaseService } from '../servicios/database.service';






@NgModule({
  declarations: [
    HomeComponent,
    CartaComponent,
    UbicacionComponent,
    SalonesComponent,
    ReservaComponent,
    SesionComponent,
    ContactoComponent

  ],
  exports:[
    HomeComponent,
    CartaComponent,
    UbicacionComponent,
    SalonesComponent,
    ReservaComponent,
    SesionComponent,
    ContactoComponent

  ],
  imports: [
    CommonModule,
    RutasVistasModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers:[DatabaseService]
})
export class VistasModule { }
