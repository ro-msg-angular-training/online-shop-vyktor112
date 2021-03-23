import { Component, OnInit } from '@angular/core';
import {Product} from "../store/state/product.state";
import {Category} from "../store/state/category.state";
import {Supplier} from "../store/state/supplier.state";
import {CategoryServices} from "../../services/category.services";
import {ProductService} from "../../services/product.services";
import {SupplierServices} from "../../services/supplier.services";
import {AppState} from "../store/state/app.state";
import {Store} from "@ngrx/store";
import {AddProduct} from "../store/actions/product.actions";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-smart-create-product',
  templateUrl: './smart-create-product.component.html'
})
export class SmartCreateProductComponent implements OnInit {

  product: Product;
  category: Category[];
  supplier: Supplier[];

  productForm: FormGroup;

  constructor(private categoryService: CategoryServices, private productService: ProductService,
              private supplierService: SupplierServices, private store: Store<AppState>,
              private router:Router, private fb: FormBuilder)
  {}

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((data) => this.category = data);
    this.product = {id: Date.now(), name: '', imageUrl: '', category: { id: 0, name: '' }, weight: 0, description: ''
      , price: 0,
      supplier: { id: 0, name: '' }};
    this.supplierService.getSupplier().subscribe((data) => this.supplier = data);
    this.productForm = this.fb.group({
      name: [this.product.name, Validators.required],
      description: [this.product.description , Validators.required],
      category: { id: [this.product.category.id , Validators.required], name: this.product.category.name},
      supplier:{ id:[this.product.supplier.id, Validators.required], name:this.product.supplier.name},
      imageUrl: [this.product.imageUrl, Validators.required],
      price: [this.product.price, Validators.required],
      weight: [this.product.weight, Validators.required]
    })
  }

  addProduct(event): void {
    this.product = {...this.productForm.value as Product, id: Date.now()};
    this.store.dispatch(new AddProduct(this.product));
    this.router.navigateByUrl('/products');
  }

}
