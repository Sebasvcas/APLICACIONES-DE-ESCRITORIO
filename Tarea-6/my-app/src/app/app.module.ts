import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { CursosComponent } from './layouts/cursos/cursos.component';
import { EducacionComponent } from './layouts/educacion/educacion.component';
import { ProyectosComponent } from './layouts/proyectos/proyectos.component';
import { InicioComponent } from './layouts/inicio/inicio.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavComponent } from './layouts/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CursosComponent,
    EducacionComponent,
    ProyectosComponent,
    InicioComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
