import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CategoriesComponent} from './product-page/categories/categories.component';
import {CategoryComponent} from './product-page/categories/category/category.component';
import {CategoryService} from './shared/services/category.service';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {ProductPageComponent} from './product-page/product-page.component';
import { ProductsComponent } from './product-page/products/products.component';
import { ProductComponent } from './product-page/products/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryComponent,
    HeaderComponent,
    ProductPageComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
