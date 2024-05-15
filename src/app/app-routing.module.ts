import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MyFirstComponent } from './my-first-module/components/my-first-component/my-first.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
