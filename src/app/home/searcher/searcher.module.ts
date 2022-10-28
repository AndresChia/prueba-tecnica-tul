import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import SearcherComponent from './searcher.component';

@NgModule({
  exports: [SearcherComponent],
  imports: [CommonModule, FormsModule, MatSelectModule],
  declarations: [SearcherComponent],
})
export default class SearcherModule {}
