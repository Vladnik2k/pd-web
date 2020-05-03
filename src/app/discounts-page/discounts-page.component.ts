import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../shared/objects/product.model';
import {ProductService} from '../shared/services/product.service';
import {DiscountService} from '../shared/services/discount.service';

@Component({
  selector: 'app-discounts-page',
  templateUrl: './discounts-page.component.html',
  styleUrls: ['./discounts-page.component.scss']
})
export class DiscountsPageComponent implements OnInit {

  products: ProductModel[] = [];
  maxDiscount: number;

  constructor(private productService: ProductService,
              private discountService: DiscountService) { }

  ngOnInit() {
    this.discountService.getMaxDiscount()
      .subscribe(maxDiscount => this.maxDiscount = maxDiscount);
    this.updateDiscountProducts();
  }

  updateDiscountProducts() {
    this.productService.getDiscountProducts()
      .subscribe(products => this.products = products);
  }

}
