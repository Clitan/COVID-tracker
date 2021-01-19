import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  cardCountsData: any;

  constructor(
    private _service: HomeService,
    private _router: Router
  ) { }


  ngOnInit() {
    this.getCardsCount();
  }

  goToStateInfo(): void {
    this._router.navigate(['/state-covid-case'])
  }

  getCardsCount(): void {
    this._service.getCardCounts().subscribe(res => {
      this.cardCountsData = res;
    }, err => {
      console.log(err);
    })
  }
}
