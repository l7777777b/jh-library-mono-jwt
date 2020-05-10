import { Moment } from 'moment';

export interface IBorrowedBook {
  id?: number;
  borrowDate?: Moment;
  bookName?: string;
  bookId?: number;
  clientEmail?: string;
  clientId?: number;
}

export class BorrowedBook implements IBorrowedBook {
  constructor(
    public id?: number,
    public borrowDate?: Moment,
    public bookName?: string,
    public bookId?: number,
    public clientEmail?: string,
    public clientId?: number
  ) {}
}
