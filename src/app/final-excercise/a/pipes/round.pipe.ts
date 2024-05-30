import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round',
})
export class RoundPipe implements PipeTransform {
  transform(price: number): number {
    const priceWithoutDecimals = Math.floor(price);
    const decimals = price - priceWithoutDecimals;
    if (decimals === 0) return price;
    else if (decimals <= 0.5) return priceWithoutDecimals + 0.5;
    else return Math.ceil(price);
  }
}
