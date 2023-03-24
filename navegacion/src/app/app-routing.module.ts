import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaComponent } from "./vistas/carta/carta.component";
import { HomeComponent } from "./vistas/home/home.component";

const routes: Routes = [
  {
    path:"",
    loadChildren: () => import("./vistas/vistas.module").then(module => module.VistasModule)
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
