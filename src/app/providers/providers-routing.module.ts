import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestProvidersComponent } from './components/test-providers/test-providers.component';

const routes: Routes = [{
  path: "",
  component: TestProvidersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvidersRoutingModule { }
