import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowAllProductsComponent } from './show-all-products/show-all-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ShowOneProductComponent } from './show-one-product/show-one-product.component';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatOptionModule} from '@angular/material/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { ProductFormComponent } from './product-form/product-form.component';
import { SmartCreateProductComponent } from './smart-create-product/smart-create-product.component';
import { SmartEditProductComponent } from './smart-edit-product/smart-edit-product.component';
import { StoreModule} from "@ngrx/store";
import {ProductEffects} from "./store/effects/product.effects";
import {EffectsModule} from "@ngrx/effects";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {ProductService} from "../services/product.services";
import {appReducers} from "./store/reducers/app.reducer";


@NgModule({
  declarations: [
    AppComponent,
    ShowAllProductsComponent,
    ShowOneProductComponent,
    PageNotFoundComponent,
    ProductFormComponent,
    SmartCreateProductComponent,
    SmartEditProductComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([ProductEffects]),
    StoreRouterConnectingModule.forRoot({stateKey:'router'}),
    NoopAnimationsModule,
    MatSliderModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
