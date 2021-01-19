import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StateCovidCasePage } from './state-covid-case.page';

const routes: Routes = [
  {
    path: '',
    component: StateCovidCasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StateCovidCasePageRoutingModule {}
