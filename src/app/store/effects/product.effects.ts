import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProductService} from "../../../services/product.services";
import {AddProduct, DeleteProduct, GetProduct, ProductActionsEnum, UpdateProduct} from "../actions/product.actions";
import {mergeMap, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";


@Injectable()
export class ProductEffects{

  getProducts = createEffect(()=> this.actions$.pipe(
    ofType(ProductActionsEnum.GetAllProducts),
    mergeMap(() => this.productService.getProducts().pipe(map( products=>({
      type: ProductActionsEnum.GetAllProductsSuccess, payload: products
    }))))
  ));

  getProduct = createEffect(() => this.actions$.pipe(
    ofType<GetProduct>(ProductActionsEnum.GetProduct),
    switchMap((action) => this.productService.getOneProducts(action.id).pipe(
      map(product => ({ type: ProductActionsEnum.GetProductSuccess, payload:product}))
    ))
  ))

  deleteProduct = createEffect(() => this.actions$.pipe(
    ofType<DeleteProduct>(ProductActionsEnum.DeleteProduct),
    switchMap((action) => this.productService.deleteProduct(action.id).pipe(
      map(product => ({type: ProductActionsEnum.DeleteProductSuccess}))
    ))
  ))

  addProduct = createEffect(() => this.actions$.pipe(
    ofType<AddProduct>(ProductActionsEnum.AddProduct),
    switchMap((action) => this.productService.addOneProduct(action.product).pipe(
      map(product => ({type: ProductActionsEnum.AddProductSuccess}))
    ))
  ))

  updateProduct = createEffect(() => this.actions$.pipe(
    ofType<UpdateProduct>(ProductActionsEnum.UpdateProduct),
    switchMap((action) => this.productService.editOneProduct(action.id, action.payload).pipe(
      map(product =>({type: ProductActionsEnum.UpdateProductSuccess, payload: product}))
    ))
  ))

  constructor(private actions$: Actions, private productService: ProductService) {
  }
}
