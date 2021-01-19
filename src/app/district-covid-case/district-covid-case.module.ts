import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistrictCovidCasePageRoutingModule } from './district-covid-case-routing.module';

import { DistrictCovidCasePage } from './district-covid-case.page';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistrictCovidCasePageRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [DistrictCovidCasePage]
})
export class DistrictCovidCasePageModule {}
