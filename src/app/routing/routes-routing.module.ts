import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestRoutingComponent } from './components/test-routing/test-routing.component';
import { TestRoutesDynamicsComponent } from './components/test-routes-dynamics/test-routes-dynamics.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TestRoutingComponent,
  },
  {
    path: ':slug',
    component: TestRoutesDynamicsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
