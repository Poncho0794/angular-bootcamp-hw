import { Component, Input } from '@angular/core';
import { IItem } from '../../../z/utils/ItemsToSell';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
})
export class ListItemComponent {
  @Input('list-item')
  listItem!: IItem;
}
