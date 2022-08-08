import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import AuditoringComponent from './auditoring.component';
import AuditoringRoutingModule from './auditoring-routing.module';

@NgModule({
  exports: [AuditoringComponent],
  imports: [CommonModule, AuditoringRoutingModule],
  declarations: [AuditoringComponent],
})
export default class AuditoringModule {}
