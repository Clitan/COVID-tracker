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

  showDistrictData(data):void{
    this._router.navigate([`/district-covid-case/${data.id}`])
  }

  goBack(): void {
    this._router.navigate(['/home'])
  }

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
