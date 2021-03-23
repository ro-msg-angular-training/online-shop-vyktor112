import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from "../store/state/product.state";
import {Category} from "../store/state/category.state";
import {Supplier} from "../store/state/supplier.state";
import {FormGroup, FormBuilder, Validators, FormControl, ControlContainer} from '@angular/forms';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input()
  categoryList: Category[];
  @Input()
  supplierList: Supplier[];
  @Input()
  productForm: FormGroup;

  @Output()
  sendProduct = new EventEmitter<Product>();



  constructor(private controlContainer: ControlContainer) { }

  ngOnInit(): void {
    this.productForm = <FormGroup>this.controlContainer.control;
  }

  press(): void{
    this.sendProduct.emit();
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
  }

}
