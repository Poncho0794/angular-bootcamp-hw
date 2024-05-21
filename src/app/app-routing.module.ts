import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MyFirstComponent } from './my-first-module/components/my-first-component/my-first.component';
import { TestEagerLoadingComponent } from './components/test-eager-loading/test-eager-loading.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "individual",
    component: MyFirstComponent
  },
  {
    path: "providers",
    loadChildren: () => import('./providers/providers.module')
    .then(m => m.ProvidersModule)
  },
  {
    path: "pipes",
    loadChildren: () => import('./pipes/pipes.module')
    .then(m => m.PipesModule)
  },
  {
    path: "material",
    loadChildren: () => import('./material-impl/material-impl.module')
    .then(m => m.MaterialImplModule)
  },
  {
    path: "routing",
    component: TestEagerLoadingComponent,
    children: [
      {
        path: "lazy",
        loadChildren: () => import('./routing/routing.module')
        .then(m => m.RoutingModule)
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
