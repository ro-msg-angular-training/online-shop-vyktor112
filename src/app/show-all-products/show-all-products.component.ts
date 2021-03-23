import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Product} from '../store/state/product.state';
import {select, Store} from "@ngrx/store";
import {GetAllProducts} from "../store/actions/product.actions";
import {selectProductList} from "../store/selectors/product.selectors";
import {AppState} from "../store/state/app.state";


@Component({
  selector: 'app-show-all-products',
  templateUrl: './show-all-products.component.html'
})
export class ShowAllProductsComponent implements OnInit{

  products$ = this.store.pipe(select(selectProductList));

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new GetAllProducts())
  }


  btnClick(id: string): void {
    this.router.navigateByUrl(`/product/${id}`);
  }

  addProduct(): void {
    this.router.navigateByUrl('add');
  }

}
