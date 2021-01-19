import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'state-covid-case',
    loadChildren: () => import('./state-covid-case/state-covid-case.module').then( m => m.StateCovidCasePageModule)
  },
  {
    path: 'district-covid-case/:id',
    loadChildren: () => import('./district-covid-case/district-covid-case.module').then( m => m.DistrictCovidCasePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
