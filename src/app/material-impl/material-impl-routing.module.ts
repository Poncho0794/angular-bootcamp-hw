import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestMaterialComponent } from './components/test-material/test-material.component';

const routes: Routes = [
  {
    path:"",
    component: TestMaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialImplRoutingModule { }
