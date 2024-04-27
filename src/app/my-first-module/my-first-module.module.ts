import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFirstModuleRoutingModule } from './my-first-module-routing.module';
import { MyFirstComponentComponent } from '../components/my-first-component/my-first-component.component';


@NgModule({
  declarations: [
    MyFirstComponentComponent
  ],
  imports: [
    CommonModule,
    MyFirstModuleRoutingModule
  ]
})
export class MyFirstModuleModule { }
