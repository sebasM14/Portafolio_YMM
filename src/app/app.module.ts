import { ModalModule } from 'ngx-bootstrap/modal';
import { FocusTrapModule } from 'ngx-bootstrap/focus-trap';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/contenedor/cabecera/cabecera.component';
import { InicioComponent } from './components/contenedor/inicio/inicio.component';
import { ErrorComponent } from './components/contenedor/error/error.component';
import { ContactoComponent } from './components/contenedor/contacto/contacto.component';
import { AcercaDeComponent } from './components/contenedor/acerca-de/acerca-de.component';
import { FooterComponent } from './components/contenedor/footer/footer.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ContenedorModule } from './modulos/contenedor/contenedor.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
// Removed FocusTrapModule import: not exported by the installed @angular/cdk version

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
    AppRoutingModule,
    ContenedorModule, // Importa el módulo principal
    BrowserAnimationsModule, // Necesario para animaciones
    ToastrModule.forRoot(),
    NgxPaginationModule,
    ModalModule.forRoot(),
    FormsModule,
    // FocusTrapModule removed because it's not exported by the current @angular/cdk package


  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi())
    

  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // To resolve: 'Template parse errors: Cannot find the control with id 'app-root'.' error message
 
})
export class AppModule { }
