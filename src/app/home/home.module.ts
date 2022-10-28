import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import HomeComponent from './home.component';
import HomeRoutingModule from './home-routing.module';
import SearcherModule from './searcher/searcher.module';

@NgModule({
  exports: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SearcherModule],
  declarations: [HomeComponent],
})
export default class HomeModule {}
