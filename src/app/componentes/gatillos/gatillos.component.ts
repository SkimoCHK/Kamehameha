import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gatillos',
  templateUrl: './gatillos.component.html',
  styleUrls: ['./gatillos.component.css'] // Nota la corrección aquí
})
export class GatillosComponent implements OnInit {
  ImageUrl: string = "";

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getDogImage();
  }

  getDogImage(): void {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';
    this.http.get(apiUrl).subscribe((response:any) => {
      this.ImageUrl = response[0].url;
    });
  }

  refreshImage(): void {
    this.getDogImage();
  }
}
