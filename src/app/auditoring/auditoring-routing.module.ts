import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AuditoringComponent from './auditoring.component';

const routes: Routes = [
  {
    path: '',
    component: AuditoringComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class AuditoringRoutingModule {}
