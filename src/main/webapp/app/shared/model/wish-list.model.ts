import { IProduct } from 'app/shared/model/product.model';

export interface IWishList {
  id?: number;
  title?: string;
  restricted?: boolean;
  products?: IProduct[];
  customerId?: number;
}

export class WishList implements IWishList {
  constructor(
    public id?: number,
    public title?: string,
    public restricted?: boolean,
    public products?: IProduct[],
    public customerId?: number
  ) {
    this.restricted = this.restricted || false;
  }
}
