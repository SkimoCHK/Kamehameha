import { Component, OnInit } from '@angular/core';
import { NeowsService } from '../../servicios3/neows.service';

@Component({
  selector: 'app-neows',
  templateUrl: './neows.component.html',
  styleUrl: './neows.component.css'
})
export class NeowsComponent implements OnInit {
  nearEarthObjects!: any[];

  constructor(private neowsService: NeowsService) { }

  ngOnInit(): void {
    this.neowsService.getNearEarthObjects().subscribe(data => {
      this.nearEarthObjects = data.near_earth_objects;
    });
  }
}
