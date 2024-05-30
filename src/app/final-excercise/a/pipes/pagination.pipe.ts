import { Pipe, PipeTransform } from '@angular/core';
import { IItem } from '../../z/utils/ItemsToSell';

@Pipe({
  name: 'pagination',
})
export class PaginationPipe implements PipeTransform {
  itemsToShow: IItem[] = [];
  defaultItemsPerPage = 5;
  transform(items: IItem[], currentPage: number): IItem[] {
    return items.slice(
      (currentPage - 1) * this.defaultItemsPerPage,
      currentPage * this.defaultItemsPerPage
    );
  }
}
