import { Component, OnInit } from '@angular/core';
import { AirbnbsDataService } from '../airbnbs-data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-airbnbs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './airbnbs.component.html',
  styleUrl: './airbnbs.component.css'
})
export class AirbnbsComponent implements OnInit{
  airbnbs: any;

  constructor(
    private _airbnbsDataService: AirbnbsDataService
  ) {}
  ngOnInit(): void {
    this._airbnbsDataService.allAirbnbs.subscribe(response => {
      this.airbnbs = response
    })
  }
}
