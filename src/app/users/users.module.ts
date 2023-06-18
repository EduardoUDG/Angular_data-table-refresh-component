import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [
    UserHomeComponent,
    UserFormComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
