import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import DetailsComponent from './details.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsComponent,
  },
  {
    path: ':id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class DetailsRoutingModule {}
