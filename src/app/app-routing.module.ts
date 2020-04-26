import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductPageComponent} from './product-page/product-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {BucketPageComponent} from './bucket-page/bucket-page.component';
import {OrderSubmittingPageComponent} from './order-submitting-page/order-submitting-page.component';
import {OrderPageComponent} from './order-page/order-page.component';


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
    path: '**',
    component: ProductPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
