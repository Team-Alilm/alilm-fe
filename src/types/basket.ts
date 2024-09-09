export interface Basket {
  id: number;
  number: number;
  name: string;
  brand: string;
  imageUrl: string;
  store: string;
  price: number;
  category: string;
  firstOption: string;
  secondOption?: string;
  thirdOption?: string;
  waitingCount: number;
}

export interface MyBasket {
  id: number;
  number: number;
  name: string;
  brand: string;
  imageUrl: string;
  store: string;
  price: number;
  category: string;
  firstOption: string;
  secondOption?: string;
  thirdOption?: string;
  isHidden: boolean;
}
