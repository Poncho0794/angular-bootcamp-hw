import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { A1Component } from './components/a1/a1.component';
import { A2Component } from './components/a2/a2.component';
import { A3Component } from './components/a3/a3.component';
import { ZModule } from '../z/z.module';
import { ListItemComponent } from './components/list-item/list-item.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationPipe } from './pipes/pagination.pipe';
import { RoundPipe } from './pipes/round.pipe';
import { FormsModule } from '@angular/forms';
import { DiscountedPricePipe } from './pipes/discounted-price.pipe';

@NgModule({
  declarations: [
    A1Component,
    A2Component,
    A3Component,
    ListItemComponent,
    PaginationComponent,
    PaginationPipe,
    RoundPipe,
    DiscountedPricePipe,
  ],
  imports: [CommonModule, ARoutingModule, ZModule, FormsModule],
})
export class AModule {}
