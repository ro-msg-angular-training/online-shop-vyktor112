export interface Product{
  id: number;
  name: string;
  description: string;
  category: { id: number, name: string };
  price: number;
  weight: number;
  imageUrl: string;
  supplier: { id: number, name: string };
}
