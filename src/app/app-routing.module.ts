import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { GatillosComponent } from './componentes/gatillos/gatillos.component';
import { NasaComponent } from './componentes/nasa/nasa.component';
import { NeowsComponent } from './componentes/neows/neows.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  {path:'proyectos',component: ProyectosComponent},
  {path:'vacio',component:AppComponent},
  {path:'index',component:InicioComponent},
  {path:'contactame',component:ContactoComponent},
  {path:'gatos',component:GatillosComponent},
  {path:'nasa',component:NasaComponent},
  {path:'objetos',component:NeowsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
