import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import HomeComponent from './home.component';
import HomeRoutingModule from './home-routing.module';

@NgModule({
  exports: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
  declarations: [HomeComponent],
})
export default class HomeModule {}
