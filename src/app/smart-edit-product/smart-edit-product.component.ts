import { Component, OnInit } from '@angular/core';
import {Product} from "../store/state/product.state";
import {Category} from "../store/state/category.state";
import {Supplier} from "../store/state/supplier.state";
import {ProductService} from "../../services/product.services";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryServices} from "../../services/category.services";
import {SupplierServices} from "../../services/supplier.services";
import {AppState} from "../store/state/app.state";
import {select, Store} from "@ngrx/store";
import {GetProduct, UpdateProduct} from "../store/actions/product.actions";
import {selectSelectedProduct} from "../store/selectors/product.selectors";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-smart-edit-product',
  templateUrl: './smart-edit-product.component.html'
})
export class SmartEditProductComponent implements OnInit {

  productId = '';
  product: Product;
  category: Category[];
  supplier: Supplier[];
  product$ = this.store.pipe(select(selectSelectedProduct));
  productForm: FormGroup;


  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router,
              private categoryService: CategoryServices,
              private supplierService: SupplierServices,
              private store: Store<AppState>, private fb: FormBuilder) {
    this.productId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.store.dispatch(new GetProduct(this.productId))
    this.product$.subscribe((data)=> this.product = data);
    //this.productService.getOneProducts(this.productId).subscribe((data) => this.product = data);
    this.categoryService.getCategory().subscribe((data) => this.category = data);
    this.supplierService.getSupplier().subscribe((data) => this.supplier = data)
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


  editProduct(event): void{
    this.product = {...this.productForm.value as Product, id: Number(this.productId)};
    this.store.dispatch(new UpdateProduct(this.productId, this.product));
    this.router.navigateByUrl(`/product/${this.productId}`);
  }

}
