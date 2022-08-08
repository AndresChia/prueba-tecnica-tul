import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import MenusComponent from './menus.component';
import MenusRoutingModule from './menus-routing.module';

@NgModule({
  exports: [MenusComponent],
  imports: [CommonModule, FormsModule, MenusRoutingModule],
  declarations: [MenusComponent],
})
export default class MenusModule {}
