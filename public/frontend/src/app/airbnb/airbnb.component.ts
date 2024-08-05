import { Component, OnInit } from '@angular/core';
import { AirbnbsDataService } from '../airbnbs-data.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-airbnb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './airbnb.component.html',
  styleUrl: './airbnb.component.css'
})
export class AirbnbComponent implements OnInit{
  airbnb: any;
  airbnbId!: string;
  constructor(
    private _airbnbsDataService: AirbnbsDataService,
    private _route: ActivatedRoute
  ) {
    this.airbnbId = this._route.snapshot.params["airbnbId"]
  }
  ngOnInit(): void {
    this._airbnbsDataService.getOneAirbnb(this.airbnbId).subscribe(response => {
      this.airbnb = response
    })
  }

  deleteAirbnb() {
    this._airbnbsDataService.removeOneAirbnb(this.airbnbId).subscribe(response => {
      this.airbnb = ""
    })
  }

}
