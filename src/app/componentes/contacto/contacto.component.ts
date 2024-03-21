import { Component } from '@angular/core';
import { ProyectoService } from '../../servicios/proyecto.service';
import { Telefono } from '../../models/Telefono';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  telefono: Telefono = new Telefono();
  successMessageVisible: boolean = false; // Variable para controlar la visibilidad de la alerta de éxito
  errorMessageVisible: boolean = false; 
  constructor(private proyectoService: ProyectoService) { }

  enviarMensaje(): void {
    this.proyectoService.postMensaje(this.telefono).subscribe(
      () => {
        console.log('Mensaje enviado exitosamente.');
        this.successMessageVisible = true; // Mostrar alerta de éxito
        this.errorMessageVisible = false; // Ocultar alerta de error
      },
      (error) => {
        // Si hay un error, mostrar mensaje de error
        console.error('Error al enviar el mensaje:', error);
        this.errorMessageVisible = true; // Mostrar alerta de error
        this.successMessageVisible = false; // Ocultar alerta de éxito
      }
    );
  }
}