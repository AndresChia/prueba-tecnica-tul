import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import RickAndMortyComponent from './rickAndMorty.component';

const routes: Routes = [
  {
    path: '',
    component: RickAndMortyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class RickAndMortyRoutingModule {}
