import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import PerformanceComponent from './performance.component';
import PerformanceRoutingModule from './performance-routing.module';

@NgModule({
  exports: [PerformanceComponent],
  imports: [CommonModule, FormsModule, RouterModule, PerformanceRoutingModule],
  declarations: [PerformanceComponent],
})
export default class PerformanceModule {}
