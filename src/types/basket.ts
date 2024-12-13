export interface Product {
  id: number;
  number: number;
  name: string;
  brand: string;
  thumbnailUrl: string;
  imageUrl: string;
  store: string;
  price: number;
  firstCategory: string;
  firstOption: string;
  secondOption?: string;
  thirdOption?: string;
  waitingCount?: number;
  tab?: 'home' | 'my-basket';
  // isHidden: boolean;
}

export interface MyBasket {
  id: number;
  productId: number;
  number: number;
  name: string;
  brand: string;
  thumbnailUrl: string;
  imageUrl: string;
  store: string;
  price: number;
  category: string;
  firstOption: string;
  secondOption?: string;
  thirdOption?: string;
  isHidden: boolean;
  waitingCount: number;
  isAlilm: string;
}
