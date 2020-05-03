import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FilterComponent} from './product-page/filter/filter.component';
import {CategoryService} from './shared/services/category.service';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {ProductPageComponent} from './product-page/product-page.component';
import { ProductsComponent } from './product-page/products/products.component';
import { ProductComponent } from './product-page/products/product/product.component';
import {CategoryComponent} from './product-page/filter/category/category.component';
import {Ng5SliderModule} from 'ng5-slider';
import { MainPageComponent } from './main-page/main-page.component';
import { BucketPageComponent } from './bucket-page/bucket-page.component';
import {LocalStorageService} from './shared/services/local-storage.service';
import {ProductService} from './shared/services/product.service';
import {BucketService} from './shared/services/bucket.service';
import { OrderSubmittingPageComponent } from './order-submitting-page/order-submitting-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderService} from './shared/services/order.service';
import { OrderPageComponent } from './order-page/order-page.component';
import { ProductInfoPageComponent } from './product-info-page/product-info-page.component';
import { DiscountsPageComponent } from './discounts-page/discounts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    CategoryComponent,
    HeaderComponent,
    ProductPageComponent,
    ProductsComponent,
    ProductComponent,
    MainPageComponent,
    BucketPageComponent,
    OrderSubmittingPageComponent,
    OrderPageComponent,
    ProductInfoPageComponent,
    DiscountsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng5SliderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CategoryService,
    ProductService,
    LocalStorageService,
    BucketService,
    CategoryService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
