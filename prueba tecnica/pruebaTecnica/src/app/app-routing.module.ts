import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import RoleGuard from 'src/guards/role.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.default),
  },
  {
    path: 'performance',
    loadChildren: () =>
      import('./performance/performance.module').then((m) => m.default),
    canActivate: [RoleGuard],
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./details/details.module').then((m) => m.default),
  },
  {
    path: 'menus',
    loadChildren: () => import('./menus/menus.module').then((m) => m.default),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
