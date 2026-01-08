import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoDashComponent } from './modulos/contenedor/dash/cuerpo-dash/cuerpo-dash.component';

const routes: Routes = [
  { path: 'home', component: CuerpoDashComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full'}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
