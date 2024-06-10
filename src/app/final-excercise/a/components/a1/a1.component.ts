import { Component, ElementRef, ViewChild } from '@angular/core';
import { IItem, ItemsToSell } from '../../../z/utils/ItemsToSell';
import { StorageService } from '../../services/storage.service';
import { debounceTime, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrl: './a1.component.scss',
})
export class A1Component {
  ItemsToSell: IItem[] = [];
  discountFilter: boolean = false;
  itemSubject: BehaviorSubject<IItem[]>;

  @ViewChild('searchBox', { static: true })
  searchBox!: ElementRef;

  constructor(private itemService: StorageService) {
    this.itemSubject = this.itemService.getSubject();
    this.itemSubject.subscribe((items) => {
      this.ItemsToSell = items;
    });
  }
  ngOnInit() {
    // se hace en este evento porque necesito que exista el input,
    // se crea un observable a partir del evento de escribir
    fromEvent(this.searchBox.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(1000)
      )
      .subscribe((value) => {
        this.filterByName(value);
      });
  }
  filterDiscountedItems() {
    !this.discountFilter
      ? this.filterItems(null)
      : this.filterItems((item) => !!item.offerDiscount);
  }
  filterByName(name: string) {
    if (name.length)
      this.filterItems((item) =>
        item.title.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      );
    else this.filterItems(null);
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
