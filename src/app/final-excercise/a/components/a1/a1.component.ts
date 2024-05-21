import { Component } from '@angular/core';
import { IItem, ItemsToSell } from '../../../z/utils/ItemsToSell';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrl: './a1.component.scss',
})
export class A1Component {
  ItemsToSell: IItem[] = ItemsToSell;
}
