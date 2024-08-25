export interface Basket {
  id: number;
  number: number;
  name: string;
  brand: string;
  imageUrl: string;
  category: string;
  price: number;
  option1: string;
  option2: string;
  option3: string;
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
  secondOption: string;
  thirdOption: string;
  isHidden: boolean;
}
