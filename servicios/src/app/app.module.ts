import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesService } from './facturacion/clientes.service';
import { FacturacionModule } from './facturacion/facturacion.module';
import { SuscribeService } from './facturacion/suscribe.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FacturacionModule,
    HttpClientModule
  ],
  providers: [
    SuscribeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ClientesService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
