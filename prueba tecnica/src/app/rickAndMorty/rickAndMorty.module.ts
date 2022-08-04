import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import RickAndMortyComponent from './rickAndMorty.component';
import RickAndMortyRoutingModule from './rickAndMorty-routing.module';

@NgModule({
  exports: [RickAndMortyComponent],
  imports: [CommonModule, RickAndMortyRoutingModule],
  declarations: [RickAndMortyComponent],
})
export default class RickAndMortyModule {}
