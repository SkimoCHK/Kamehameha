import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { GatillosComponent } from './componentes/gatillos/gatillos.component';
import { NasaComponent } from './componentes/nasa/nasa.component';
import { NeowsComponent } from './componentes/neows/neows.component';


@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    InicioComponent,
    ContactoComponent,
    GatillosComponent,
    NasaComponent,
    NeowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
