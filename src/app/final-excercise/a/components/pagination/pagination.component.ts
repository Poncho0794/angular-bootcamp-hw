import { Component, Input } from '@angular/core';
import { IItem } from '../../../z/utils/ItemsToSell';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  @Input('items') items!: IItem[];

  pages: number = 0;
  currentPage: number = 1;

  ngOnInit() {
    this.pages = Math.ceil(this.items.length / 5);
  }

  ngOnChanges() {
    this.pages = Math.ceil(this.items.length / 5);
    this.currentPage = 1;
  }

  next() {
    this.currentPage++;
  }
  prev() {
    this.currentPage--;
  }
  goToPage(page: number) {
    this.currentPage = page;
  }
}
