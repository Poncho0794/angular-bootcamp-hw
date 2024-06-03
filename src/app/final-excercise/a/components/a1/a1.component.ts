import { Component } from '@angular/core';
import { IItem, ItemsToSell } from '../../../z/utils/ItemsToSell';
import { StorageService } from '../../services/storage.service';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrl: './a1.component.scss',
})
export class A1Component {
  ItemsToSell: IItem[] = [];
  discountFilter: boolean = false;
  itemSubject: BehaviorSubject<IItem[]>;
  constructor(private itemService: StorageService) {
    this.itemSubject = this.itemService.getSubject();
    this.itemSubject.subscribe((items) => {
      this.ItemsToSell = items;
    });
  }
  filterDiscountedItems() {
    !this.discountFilter
      ? this.filterItems(null)
      : this.filterItems((item) => !!item.offerDiscount);
  }
  filterItems(criteriaCB: ((item: IItem) => boolean) | null) {
    if (criteriaCB) {
      this.itemSubject
        .pipe(map((items: IItem[]) => items.filter(criteriaCB)))
        .subscribe((filteredItems) => {
          this.ItemsToSell = filteredItems;
        });
    } else {
      this.itemSubject.subscribe((items) => {
        this.ItemsToSell = items;
      });
    }
  }
}
