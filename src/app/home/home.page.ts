import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  cardCountsData:any;

  constructor(
    private _service: HomeService
  ) { }


  ngOnInit() {
    this.getCardsCount();
  }


  getCardsCount(): void {
    this._service.getCardCounts().subscribe(res => {
      this.cardCountsData =res;
    }, err => {
      console.log(err);
    })
  }
}
