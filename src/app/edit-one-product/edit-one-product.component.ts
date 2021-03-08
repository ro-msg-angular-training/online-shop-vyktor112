import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product.model';
import {ProductService} from '../../services/product.services';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../model/category.model';
import {CategoryServices} from '../../services/category.services';

@Component({
  selector: 'app-edit-one-product',
  templateUrl: './edit-one-product.component.html',
  styleUrls: ['./edit-one-product.component.css']
})
export class EditOneProductComponent implements OnInit {

  productId = '';
  product: Product;
  categorys: Category[];
  selected: string;



  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router,
              private categoryService: CategoryServices) {
    this.productId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.productService.getOneProducts(this.productId).subscribe((data) => this.product = data);
    this.categoryService.getCategory().subscribe((data) => this.categorys = data);
    console.log(this.categorys);
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  editProduct(): void{
    this.productService.editOneProduct(this.productId, this.product).subscribe();
    this.router.navigateByUrl(`/product/${this.productId}`);
  }

  refreshProduct(): void{
    this.productService.getOneProducts(this.productId).subscribe((data) => this.product = data);
  }

}
