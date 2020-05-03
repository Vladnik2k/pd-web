import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductPageComponent} from './product-page/product-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {BucketPageComponent} from './bucket-page/bucket-page.component';
import {OrderSubmittingPageComponent} from './order-submitting-page/order-submitting-page.component';
import {OrderPageComponent} from './order-page/order-page.component';
import {ProductInfoPageComponent} from './product-info-page/product-info-page.component';
import {DiscountsPageComponent} from './discounts-page/discounts-page.component';


const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'products',
    component: ProductPageComponent
  },
  {
    path: 'product/:productId',
    component: ProductInfoPageComponent
  },
  {
    path: 'bucket',
    component: BucketPageComponent
  },
  {
    path: 'order',
    component: OrderSubmittingPageComponent
  },
  {
    path: 'order/:orderId',
    component: OrderPageComponent
  },
  {
    path: 'discounts',
    component: DiscountsPageComponent
  },
  {
    path: '**',
    component: ProductPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
