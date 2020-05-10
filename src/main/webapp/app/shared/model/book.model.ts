import { IAuthor } from 'app/shared/model/author.model';

export interface IBook {
  id?: number;
  isbn?: string;
  name?: string;
  publishYear?: string;
  copies?: number;
  coverContentType?: string;
  cover?: any;
  publisherName?: string;
  publisherId?: number;
  authors?: IAuthor[];
}

export class Book implements IBook {
  constructor(
    public id?: number,
    public isbn?: string,
    public name?: string,
    public publishYear?: string,
    public copies?: number,
    public coverContentType?: string,
    public cover?: any,
    public publisherName?: string,
    public publisherId?: number,
    public authors?: IAuthor[]
  ) {}
}
