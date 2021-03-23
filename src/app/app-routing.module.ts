import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowOneProductComponent} from './show-one-product/show-one-product.component';
import { ShowAllProductsComponent} from './show-all-products/show-all-products.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SmartCreateProductComponent} from "./smart-create-product/smart-create-product.component";
import {SmartEditProductComponent} from "./smart-edit-product/smart-edit-product.component";

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ShowAllProductsComponent},
  {path: 'product/:id', component: ShowOneProductComponent},
  {path: 'product/edit/:id', component: SmartEditProductComponent},
  {path: 'add', component: SmartCreateProductComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
