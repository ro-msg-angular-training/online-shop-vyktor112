import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ProductService} from '../../services/product.services';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-show-all-products',
  templateUrl: './show-all-products.component.html',
  styleUrls: ['./show-all-products.component.css']
})
export class ShowAllProductsComponent implements OnInit{

  listProducts: Product[] = [];

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => this.listProducts = data);
  }


  btnClick(id: string): void {
    this.router.navigateByUrl(`/product/${id}`);
  }

  addProduct(): void {
    this.router.navigateByUrl('add');
  }

}
