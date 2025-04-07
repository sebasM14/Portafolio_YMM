import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/contenedor/cabecera/cabecera.component';
import { InicioComponent } from './components/contenedor/inicio/inicio.component';
import { ErrorComponent } from './components/contenedor/error/error.component';
import { ContactoComponent } from './components/contenedor/contacto/contacto.component';
import { AcercaDeComponent } from './components/contenedor/acerca-de/acerca-de.component';
import { FooterComponent } from './components/contenedor/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    InicioComponent,
    ErrorComponent,
    ContactoComponent,
    AcercaDeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
