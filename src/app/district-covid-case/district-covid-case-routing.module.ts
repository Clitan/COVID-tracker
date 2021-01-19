import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistrictCovidCasePage } from './district-covid-case.page';

const routes: Routes = [
  {
    path: '',
    component: DistrictCovidCasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistrictCovidCasePageRoutingModule {}
