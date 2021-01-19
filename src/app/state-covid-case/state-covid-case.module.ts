import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StateCovidCasePageRoutingModule } from './state-covid-case-routing.module';

import { StateCovidCasePage } from './state-covid-case.page';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StateCovidCasePageRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: [StateCovidCasePage]
})
export class StateCovidCasePageModule { }
