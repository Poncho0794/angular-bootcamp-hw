import { Injectable } from '@angular/core';
import { IItem, ItemsToSell } from '../z/utils/ItemsToSell';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private items: IItem[] = ItemsToSell;
  constructor() {}

  getItems() {
    return this.items;
  }
  getItem(id: string) {
    const item = this.items.find((item) => item.id === id);
    return item || ({} as IItem);
  }
}
