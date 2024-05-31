import { Component } from '@angular/core';
import { IItem, IPrice } from '../../../z/utils/ItemsToSell';
import { StorageService } from '../../services/storage.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
class ItemImpl implements IItem {
  constructor(
    public id: string,
    public title: string,
    public prices: IPrice,
    public photos: string[],
    public description: string,
    public offerDiscount?: number | undefined
  ) {}
}

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss',
})
export class ItemFormComponent {
  model: ItemImpl;
  itemForm!: FormGroup;
  constructor(private storageService: StorageService) {
    this.model = new ItemImpl(
      String(storageService.getItems().length),
      '',
      {},
      [],
      ''
    );
    this.itemForm = new FormGroup({
      title: new FormControl(this.model.title, [Validators.required]),
      description: new FormControl(this.model.description, [
        Validators.required,
      ]),
      photos: new FormArray([]),
      prices: new FormArray([]),
    });
  }
  addPrice() {
    const priceForm = new FormGroup({
      dimension: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
    });
    this.prices.push(priceForm);
  }
  deletePrice(index: number) {
    this.prices.removeAt(index);
  }

  onSubmit() {
    const prices = this.prices.value.reduce((result: IPrice, price: any) => {
      return { ...result, [price.dimension]: price.price };
    }, {});
    this.model = { ...this.model, ...this.itemForm.value, prices };
    console.log(this.title?.hasError('required'));
  }
  get prices() {
    return this.itemForm.controls['prices'] as FormArray;
  }
  get title() {
    return this.itemForm.get('title');
  }
  get description() {
    return this.itemForm.get('description');
  }
}
