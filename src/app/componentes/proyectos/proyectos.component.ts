import { Component } from '@angular/core';
import { Certificacion } from '../../models/Certificacion';
import { ProyectoService } from '../../servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  title = 'PORTAFOLIO';
  certificado: Certificacion[]=[];

  constructor(private cerService: ProyectoService){}

  ngOnInit():void{
    this.cerService.GetCertificados().subscribe((result:Certificacion[]) => (this.certificado=result));
    console.log(this.certificado); 
  }
}
