import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../shared/services/category.service';
import {ProductService} from '../shared/services/product.service';
import {ProductModel} from '../shared/objects/product.model';
import {CategoryModel} from '../shared/objects/category.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  products: ProductModel[] = [];
  categories: CategoryModel[] = [];
  chosenCategories: CategoryModel[] = [];
  searchText = '';
  minPrice: number = null;
  maxPrice: number = null;

  constructor(private categoryService: CategoryService,
              private productService: ProductService) {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
    this.updateProducts();
  }

  ngOnInit() {
  }

  updateProducts(): void {
    this.productService.getProductsByFilter(
      this.chosenCategories.map(category => category.id),
      this.searchText,
      this.minPrice,
      this.maxPrice)
      .subscribe(products => this.products = products);
  }

  updateCategories(categories: CategoryModel[]): void {
    this.chosenCategories = categories;
    this.updateProducts();
  }

  updateSearchText(searchText: string): void {
    this.searchText = searchText;
    this.updateProducts();
  }

  updatePrice(values: number[]): void {
    this.minPrice = values[0];
    this.maxPrice = values[1];
    this.updateProducts();
  }

}
