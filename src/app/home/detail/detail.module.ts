import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import DetailComponent from './detail.component';

@NgModule({
  exports: [DetailComponent],
  imports: [CommonModule],
  declarations: [DetailComponent],
})
export default class DetailModule {}
