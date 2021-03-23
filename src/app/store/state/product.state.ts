export class Product{
  id: number;
  name: string;
  description: string;
  category: { id: number, name: string };
  price: number;
  weight: number;
  imageUrl: string;
  supplier: { id: number, name: string };
}


export interface ProductState{
  products: Product[];
  selectedProduct: Product;
}

export const initialProductState: ProductState = {
  products: [],
  selectedProduct: null
}
