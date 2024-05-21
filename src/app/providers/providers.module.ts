import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersRoutingModule } from './providers-routing.module';
import { TestProvidersComponent } from './components/test-providers/test-providers.component';


@NgModule({
  declarations: [
    TestProvidersComponent, 
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule
  ],
  providers:[]
})
export class ProvidersModule { }
