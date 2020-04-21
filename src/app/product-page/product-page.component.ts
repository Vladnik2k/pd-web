import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../shared/services/category.service';
import {ProductService} from '../shared/services/product.service';
import {ProductModel} from '../shared/objects/ProductModel';
import {CategoryModel} from '../shared/objects/CategoryModel';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  products: ProductModel[] = [];
  categories: CategoryModel[] = [];

  constructor(private categoryService: CategoryService,
              private productService: ProductService) {
    categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
    productService.getProduct()
      .subscribe(products => this.products = products);
  }

  ngOnInit() {
  }

}
