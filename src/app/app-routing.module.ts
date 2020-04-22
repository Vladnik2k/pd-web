import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductPageComponent} from './product-page/product-page.component';
import {MainPageComponent} from './main-page/main-page.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductPageComponent
  },
  {
    path: 'main',
    component: MainPageComponent
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
