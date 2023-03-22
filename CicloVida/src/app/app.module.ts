import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuentaRegresivaComponent } from './cuenta-regresiva/cuenta-regresiva.component';
import { BarraProgresoComponent } from './barra-progreso/barra-progreso.component';

@NgModule({
  declarations: [
    AppComponent,
    CuentaRegresivaComponent,
    BarraProgresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
