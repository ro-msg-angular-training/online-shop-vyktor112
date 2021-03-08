import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowOneProductComponent} from './show-one-product/show-one-product.component';
import { ShowAllProductsComponent} from './show-all-products/show-all-products.component';
import {EditOneProductComponent} from './edit-one-product/edit-one-product.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AddOneProductComponent} from './add-one-product/add-one-product.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ShowAllProductsComponent},
  {path: 'product/:id', component: ShowOneProductComponent},
  {path: 'product/edit/:id', component: EditOneProductComponent},
  {path: 'add', component: AddOneProductComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
