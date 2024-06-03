import { Injectable } from '@angular/core';
import { IItem, ItemsToSell } from '../../z/utils/ItemsToSell';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private items: IItem[] = ItemsToSell;
  private itemSubject = new BehaviorSubject(this.items);
  constructor() {}

  getItems() {
    return this.items;
  }
  getItem(id: string) {
    const item = this.itemSubject.getValue().find((item) => item.id === id);
    return item || ({} as IItem);
  }
  addItem(item: IItem) {
    const currentItems = this.itemSubject.getValue();
    this.itemSubject.next([...currentItems, item]);
  }
  getSubject() {
    return this.itemSubject;
  }
}
