import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersRoutingModule } from './providers-routing.module';
import { TestProvidersComponent } from './components/test-providers/test-providers.component';
import { RootService } from './services/root.service';
import { ProviderService } from './services/provider.service';


@NgModule({
  declarations: [
    TestProvidersComponent, 
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule
  ],
  providers:[RootService]
})
export class ProvidersModule { }
