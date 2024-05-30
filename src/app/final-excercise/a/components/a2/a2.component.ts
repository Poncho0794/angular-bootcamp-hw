import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IItem } from '../../../z/utils/ItemsToSell';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrl: './a2.component.scss',
})
export class A2Component {
  protected id: string | null;
  protected item: IItem;
  constructor(
    private route: ActivatedRoute,
    private storageService: StorageService
  ) {
    this.id = route.snapshot.paramMap.get('id');
    this.item = this.id ? storageService.getItem(this.id) : ({} as IItem);
    console.log(this.id, this.item);
  }
}
