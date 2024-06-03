import { Component, input } from '@angular/core';
import { IItem, IPrice } from '../../../z/utils/ItemsToSell';
import { StorageService } from '../../services/storage.service';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {
  ValidateUniquePricetag,
  ValidateUniquePricetagDirective,
} from '../../directives/validate-unique-pricetag.directive';
import { checkErrorsInForm } from './utils';
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
  errors?: string[];
  constructor(private storageService: StorageService) {
    this.model = new ItemImpl(
      String(storageService.getItems().length + 1),
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
      dimension: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]{1,7}$'),
        ValidateUniquePricetag(this.prices),
      ]),
      price: new FormControl(0, [Validators.required]),
    });
    this.prices.push(priceForm);
  }
  addPhoto() {
    const priceForm = new FormGroup({
      imgUrl: new FormControl('', [Validators.required]),
    });
    this.photos.push(priceForm);
  }
  removePhoto(index: number) {
    this.photos.removeAt(index);
  }
  removePrice(index: number) {
    this.prices.removeAt(index);
  }

  checkErrors() {
    return checkErrorsInForm(this.itemForm);
  }

  onSubmit() {
    this.errors = this.checkErrors();
    if (this.photos.length <= 0 || this.prices.length <= 0) {
      this.errors.push(
        `${this.photos.length <= 0 ? 'Fotos' : 'Precios'}: necesitas almenos 1`
      );
    }
    if (this.errors.length) return;
    const prices = this.prices.value.reduce((result: IPrice, price: any) => {
      return { ...result, [price.dimension]: price.price };
    }, {});
    const photos = this.photos.value.map((photoObj: any) => {
      return photoObj.imgUrl;
    });
    this.model = { ...this.model, ...this.itemForm.value, prices, photos };
    console.log(this.model);
    this.storageService.addItem(this.model);
    this.clear();
  }
  clear() {
    this.itemForm.reset();
    this.model = new ItemImpl(
      String(this.storageService.getItems().length + 1),
      '',
      {},
      [],
      ''
    );
  }
  get prices() {
    return this.itemForm.get('prices') as FormArray;
  }
  get title() {
    return this.itemForm.get('title');
  }
  get description() {
    return this.itemForm.get('description');
  }
  get photos() {
    return this.itemForm.get('photos') as FormArray;
  }
}
