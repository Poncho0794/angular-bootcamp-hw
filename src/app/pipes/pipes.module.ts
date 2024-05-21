import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipesComponent } from './components/test-pipes/test-pipes.component';
import { PipesRoutingModule } from './pipes-routing.module';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [TestPipesComponent, CapitalizePipe],
  imports: [CommonModule, PipesRoutingModule],
})
export class PipesModule {}
