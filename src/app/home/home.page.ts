import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CovidService } from '../services/covid.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  cardCountsData: any;

  constructor(
    private _service: CovidService,
    private _router: Router
  ) { }


  ngOnInit() {
    this.getCardsCount();
  }

  /**
 * @description Back to previous page
 * @param {}
 */
  goToStateInfo(): void {
    this._router.navigate(['/state-covid-case'])
  }

  /**
  * @description Get total covid count Information
  * @param {}
  * @author Clitan Crasta
  * @see https://documenter.getpostman.com/view/11238297/SzfDwQdd?version=latest#1a62a888-93c7-4d07-95b3-97ab7a97d1ce
  * @version v1
  */

  getCardsCount(): void {
    this._service.getCardCounts().subscribe(res => {
      this.cardCountsData = res;
    }, err => {
      console.log(err);
    })
  }
}
