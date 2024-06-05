import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFirstRoutingModule } from './my-first-routing.module';
import { MyFirstComponent } from './components/my-first-component/my-first.component';


@NgModule({
  declarations: [
    MyFirstComponent
  ],
  imports: [
    CommonModule,
    MyFirstRoutingModule
  ]
})
export class MyFirstModule { }
