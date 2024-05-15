import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { TestRoutingComponent } from './components/test-routing/test-routing.component';
import { TestRoutesDynamicsComponent } from './components/test-routes-dynamics/test-routes-dynamics.component';


@NgModule({
  declarations: [
    TestRoutingComponent,
    TestRoutesDynamicsComponent
  ],
  imports: [
    CommonModule,
    RoutingRoutingModule
  ]
})
export class RoutingModule { }
