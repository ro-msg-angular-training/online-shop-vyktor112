import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {Category} from '../model/category.model';
import {CategoryServices} from '../../services/category.services';
import {Subscription} from 'rxjs';
import {ProductService} from '../../services/product.services';
import {Supplier} from '../model/supplier.model';
import {SupplierServices} from '../../services/supplier.services';

@Component({
  selector: 'app-add-one-product',
  templateUrl: './add-one-product.component.html',
  styleUrls: ['./add-one-product.component.css']
})
export class AddOneProductComponent implements OnInit, OnDestroy{

  product: Product;
  category: Category[];
  currentCategory: Category;
  supplier: Supplier[];
  currentSupplier: Supplier;

  constructor(private categoryService: CategoryServices, private productService: ProductService, private supplierService: SupplierServices)
  {}

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((data) => this.category = data);
    this.product = {id: Date.now(), name: '', imageUrl: '', category: { id: 0, name: '' }, weight: 0, description: '', price: 0,
      supplier: { id: 0, name: '' }};
    this.currentCategory = this.product.category;
    this.currentSupplier = this.product.supplier;
    this.supplierService.getSupplier().subscribe((data) => this.supplier = data);
  }
  ngOnDestroy(): void {
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

  addProduct(): void {
    this.currentCategory.name = this.category.find(x => x.id === this.currentCategory.id).name;
    this.product.category = this.currentCategory;
    this.currentSupplier.name = this.supplier.find(x => x.id === this.currentSupplier.id).name;
    console.log(this.productService.addOneProduct(this.product).subscribe());
  }

  cancelProduct(): void{
    this.product = {id: Date.now(), name: '', imageUrl: '', category: { id: 0, name: '' }, weight: 0, description: '', price: 0,
      supplier: { id: 0, name: '' }};
    this.currentCategory = this.product.category;
    this.currentSupplier = this.product.supplier;
}


}
