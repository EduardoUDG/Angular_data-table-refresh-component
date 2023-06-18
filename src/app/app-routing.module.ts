import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from './router-controller.routing';

const routes: Routes = [
  {
    path: Router.HOME,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: Router.USERS,
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
