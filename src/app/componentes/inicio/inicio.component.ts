import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  skillTitle: string = '';
  skillDescription: string = '';

  showSkillDetails(skillName: string): void {
    const skillDetails: { [key: string]: string } = {
      "Desarrollo Web": "Tengo experiencia en el desarrollo web, creando sitios web dinámicos y atractivos utilizando tecnologías como HTML, CSS, JavaScript, y frameworks como ASP.NET Core. He realizado en proyectos sobresalientes de la universidad y aplicaciones web personalizadas.",
      "SQL Server": "Durante mi carrera, he trabajado con bases de datos SQL Server para gestionar y almacenar datos de manera eficiente. He diseñado esquemas de bases de datos, consultas avanzadas y procedimientos almacenados para optimizar el rendimiento de las aplicaciones.",
      "C#": "Soy un programador con conocimiento intermedio en C# con experiencia en el desarrollo aplicaciones web y servicios web. He trabajado en proyectos C# desde la conceptualización hasta la implementación y el despliegue.",
      "Redes": "He adquirido experiencia en la configuración y administración de redes empresariales. Esto incluye la configuración de enrutadores, switches, firewalls y la solución de problemas de conectividad. Además, he implementado políticas de seguridad para proteger las redes empresariales.",
      "Ciberseguridad": "Mi interés en la ciberseguridad me ha llevado a aprender sobre técnicas de detección de amenazas, análisis de vulnerabilidades y pruebas de penetración. También he trabajado en fortalecer la seguridad de aplicaciones y redes para proteger la información sensible.",
      "Diseño Web": "Además de mi experiencia en desarrollo web, también disfruto del diseño web. He trabajado en la creación de interfaces de usuario atractivas y funcionales utilizando herramientas de diseño gráfico y tecnologías front-end. Me esfuerzo por combinar la estética con la usabilidad en mis diseños."
    };

    this.skillTitle = skillName;
    this.skillDescription = skillDetails[skillName];
  }

  closeSkillDetails(): void {
    this.skillTitle = '';
    this.skillDescription = '';
  }
}
