import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductPageComponent} from './product-page/product-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {BucketComponent} from './bucket/bucket.component';


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
    component: BucketComponent
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
