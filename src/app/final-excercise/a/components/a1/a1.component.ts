import { Component } from '@angular/core';
import { IItem, ItemsToSell } from '../../../z/utils/ItemsToSell';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrl: './a1.component.scss',
})
export class A1Component {
  ItemsToSell: IItem[];
  discountFilter: boolean = false;
  constructor(private itemService: StorageService) {
    this.ItemsToSell = itemService.getItems();
  }
  filterDiscountedItems() {
    this.ItemsToSell = !this.discountFilter
      ? this.itemService.getItems()
      : this.itemService.getItems().filter((item) => !!item.offerDiscount);
  }
}
