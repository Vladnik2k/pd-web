import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GoodsComponent} from './goods/goods.component';
import {CategoriesComponent} from './goods/categories/categories.component';
import {CategoryComponent} from './goods/categories/category/category.component';
import {CategoriesService} from './goods/categories.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { GoodsInfoComponent } from './goods/goods-container/goods-info/goods-info.component';
import { GoodsContainerComponent } from './goods/goods-container/goods-container.component';

@NgModule({
  declarations: [
    AppComponent,
    GoodsComponent,
    CategoriesComponent,
    CategoryComponent,
    HeaderComponent,
    GoodsInfoComponent,
    GoodsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
