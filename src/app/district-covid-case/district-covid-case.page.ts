import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CovidService } from '../services/covid.service';

@Component({
  selector: 'app-district-covid-case',
  templateUrl: './district-covid-case.page.html',
  styleUrls: ['./district-covid-case.page.scss'],
})
export class DistrictCovidCasePage implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['name', 'confirmed', 'recovered', 'deaths'];
  dataSource: MatTableDataSource<any>;
  stateName: string;

  constructor(
    private _service: CovidService,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getRouteData();
  }

  /**
  * @description get route params
  * @param {}
  */

  getRouteData(): void {
    this._activeRoute.params.subscribe(params => {
      this.getDistrictDetails(params['id']);
    })
  }

  /**
   * @description Back to previous page
   * @param {}
   */

  goBack(): void {
    this._router.navigate(['/state-covid-case'])
  }

  /**
   * @description Get District covid Information
   * @param id state ID
   * @author Clitan Crasta
   * @see https://documenter.getpostman.com/view/11238297/SzfDwQdd?version=latest#1a62a888-93c7-4d07-95b3-97ab7a97d1ce
   * @version v1
   */


  getDistrictDetails(id: string): void {
    this._service.getStateDetails().subscribe(res => {
      res.map(data => {
        if (data.id == id) {
          this.stateName = data.state;
          this.dataSource = new MatTableDataSource(data.districtData)
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      })

    }, err => {
      console.log(err);
    })
  }

}


