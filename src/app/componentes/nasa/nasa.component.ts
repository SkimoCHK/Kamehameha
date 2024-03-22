import { Component, OnInit } from '@angular/core';
import { NasaService } from '../../servicios2/nasa.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrl: './nasa.component.css'
})
export class NasaComponent implements OnInit {
  astronomyPicture: any;

  constructor(private nasaService: NasaService) { }

  ngOnInit(): void {
    this.getAstronomyPicture();
  }

  getAstronomyPicture(): void {
    this.nasaService.getAstronomyPictureOfTheDay().subscribe(data => {
      this.astronomyPicture = data;
    });
  }

  refrescar(): void {
    this.getAstronomyPicture();
  }

}
