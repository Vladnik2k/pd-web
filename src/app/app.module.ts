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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng5SliderModule
  ],
  providers: [
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
