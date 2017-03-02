import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainViewComponent } from './main/main.component';
import { DetailedViewComponent } from './detailed/detailed.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainview', pathMatch: 'full' },
  { path: 'mainview', component: MainViewComponent },
  { path: 'detailedview/:id', component: DetailedViewComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}