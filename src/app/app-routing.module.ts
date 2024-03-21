import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

const routes: Routes = [
  {path:'proyectos',component: ProyectosComponent},
  {path:'vacio',component:AppComponent},
  {path:'index',component:InicioComponent},
  {path:'contactame',component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
