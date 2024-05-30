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
  constructor(private itemService: StorageService) {
    this.ItemsToSell = itemService.getItems();
    console.log(ItemsToSell);
  }
}
