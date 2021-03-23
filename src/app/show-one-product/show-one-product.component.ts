import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../store/state/product.state';
import {AppState} from "../store/state/app.state";
import {select, Store} from "@ngrx/store";
import {selectSelectedProduct} from "../store/selectors/product.selectors";
import {DeleteProduct, GetProduct} from "../store/actions/product.actions";



@Component({
  selector: 'app-show-one-product',
  templateUrl: './show-one-product.component.html'
})
export class ShowOneProductComponent implements OnInit {

  productId = '';
  product$ = this.store.pipe(select(selectSelectedProduct));
  detailedProduct: Product;

  constructor(private route: ActivatedRoute, private router: Router,
              private store: Store<AppState>) {
    this.productId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.store.dispatch(new GetProduct(this.productId))
    this.product$.subscribe(data => this.detailedProduct = data);
  }

   deleteProduct(): void{
    if (confirm(`Are you sure you want to delete ${this.detailedProduct.name}` )){
      this.store.dispatch(new DeleteProduct(this.productId));
      this.router.navigateByUrl(`/products`);
    }
  }

  editProduct(): void{
    this.router.navigateByUrl(`/product/edit/${this.productId}`);
  }
}
