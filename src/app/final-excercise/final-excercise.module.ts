import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinalExcerciseRoutingModule } from './final-excercise-routing.module';
import { AModule } from './a/a.module';
import { A1Component } from './a/components/a1/a1.component';
import { A2Component } from './a/components/a2/a2.component';
import { A3Component } from './a/components/a3/a3.component';
import { BModule } from './b/b.module';
import { ZModule } from './z/z.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FinalExcerciseRoutingModule, AModule, BModule, ZModule],
})
export class FinalExcerciseModule {}
