import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../model/product.model';
import {ProductService} from '../../services/product.services';



@Component({
  selector: 'app-show-one-product',
  templateUrl: './show-one-product.component.html',
  styleUrls: ['./show-one-product.component.css']
})
export class ShowOneProductComponent implements OnInit {

  productId = '';
  product: Product;

  constructor(private route: ActivatedRoute, private router: Router,
              private productService: ProductService) {
    this.productId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.productService.getOneProducts(this.productId).subscribe((data) => this.product = data);
  }

   deleteProduct(): void{
    if (confirm(`Are you sure you want to delete ${this.product.name}` )){
      this.productService.deleteProduct(this.productId).subscribe((data) => alert(data.result));
      this.router.navigateByUrl(`/products`);
    }
  }

  editProduct(): void{
    this.router.navigateByUrl(`/product/edit/${this.productId}`);
  }
}
