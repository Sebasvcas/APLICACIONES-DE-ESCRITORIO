import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

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
    InicioComponent,
    CursosComponent,
    EducacionComponent,
    ProyectosComponent,
    ContactComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'inicio', component: InicioComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'cursos', component: CursosComponent},
      {path: 'educacion', component: EducacionComponent},
      {path: 'proyectos', component: ProyectosComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
