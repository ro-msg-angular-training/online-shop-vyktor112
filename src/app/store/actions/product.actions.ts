import {Action, createAction, props} from "@ngrx/store";
import {Product} from "../state/product.state";

export enum ProductActionsEnum{
  GetAllProducts ='[Product] Get Products',
  GetAllProductsSuccess ='[Product] Get Products Success',
  GetProduct ='[Product] Get Product',
  GetProductSuccess ='[Product] Get Product Success',
  DeleteProduct = '[Product] Delete Product',
  DeleteProductSuccess = '[Product] Delete Product Success',
  AddProduct = '[Product] Add Product',
  AddProductSuccess = '[Product] Add Product Success',
  UpdateProduct =  '[Product] Update Product',
  UpdateProductSuccess =  '[Product] Update Product Success',
}

export class GetAllProducts implements Action{
  public readonly type = ProductActionsEnum.GetAllProducts;
}

export class GetAllProductsSuccess implements Action{
  public readonly type = ProductActionsEnum.GetAllProductsSuccess;
  constructor(public payload: Product[]) {}
}

export class GetProduct implements Action{
  public readonly type = ProductActionsEnum.GetProduct;
  constructor(public id: string) {
  }
}

export class GetProductSuccess implements Action{
  public readonly type = ProductActionsEnum.GetProductSuccess;
  constructor(public payload: Product) {}
}

export class DeleteProduct implements Action{
  public readonly type = ProductActionsEnum.DeleteProduct;
  constructor(public id: string) {}
}

export class DeleteProductSuccess implements Action{
  public readonly type = ProductActionsEnum.DeleteProductSuccess;
}

export class AddProduct implements Action{
  public readonly type = ProductActionsEnum.AddProduct;
  constructor(public product: Product) {}
}

export class AddProductSuccess implements Action{
  public readonly type = ProductActionsEnum.AddProductSuccess;
}

export class UpdateProduct implements Action{
  public readonly type = ProductActionsEnum.UpdateProduct;
  constructor(public id: string, public payload: Product) {}
}

export class UpdateProductSuccess implements Action{
  public readonly type = ProductActionsEnum.UpdateProductSuccess;
  constructor(public payload: Product) {}
}

export type ProductActions =
  GetAllProducts | GetAllProductsSuccess |
  GetProduct | GetProductSuccess |
  DeleteProduct | DeleteProductSuccess |
  AddProduct | AddProductSuccess |
  UpdateProduct | UpdateProductSuccess;
