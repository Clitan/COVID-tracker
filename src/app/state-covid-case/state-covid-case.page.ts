import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CovidService } from '../services/covid.service';


@Component({
  selector: 'app-state-covid-case',
  templateUrl: './state-covid-case.page.html',
  styleUrls: ['./state-covid-case.page.scss'],
})
export class StateCovidCasePage implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['state', 'confirmed', 'recovered', 'deaths'];
  dataSource: MatTableDataSource<any>;

  constructor(
    private _service: CovidService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getStateDetails();
  }



  showDistrictData(data): void {
    this._router.navigate([`/district-covid-case/${data.id}`])
  }

  /**
  * @description Back to previous page
  * @param {}
  */

  goBack(): void {
    this._router.navigate(['/home'])
  }

  /**
   * @description Get states covid Information
   * @param {}
   * @author Clitan Crasta
   * @see https://documenter.getpostman.com/view/11238297/SzfDwQdd?version=latest#1a62a888-93c7-4d07-95b3-97ab7a97d1ce
   * @version v1
   */

  getStateDetails(): void {
    this._service.getStateDetails().subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, err => {
      console.log(err);
    })
  }

}
