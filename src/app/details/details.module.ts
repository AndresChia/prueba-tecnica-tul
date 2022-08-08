import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import DetailsComponent from './details.component';
import DetailsRoutingModule from './details-routing.module';

@NgModule({
  exports: [DetailsComponent],
  imports: [CommonModule, DetailsRoutingModule],
  declarations: [DetailsComponent],
})
export default class DetailsModule {}
