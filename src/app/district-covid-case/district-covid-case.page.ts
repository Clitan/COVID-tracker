import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../services/home.service';

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
    private _service: HomeService,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getRouteData();
  }


  getRouteData(): void {
    this._activeRoute.params.subscribe(params => {
      this.getDistrictDetails(params['id']);
    })
  }

  goBack(): void {
    this._router.navigate(['/state-covid-case'])
  }

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


