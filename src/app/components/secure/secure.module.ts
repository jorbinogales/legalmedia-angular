import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    SecureComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SecureModule { }
