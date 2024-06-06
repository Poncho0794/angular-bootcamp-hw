import { IItem, IPrice } from '../../../z/utils/ItemsToSell';

export class ItemImpl implements IItem {
  constructor(
    public id: string,
    public title: string,
    public prices: IPrice,
    public photos: string[],
    public description: string,
    public offerDiscount?: number | undefined
  ) {}
}
