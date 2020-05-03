import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/services/product.service';
import {OrderService} from '../shared/services/order.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  numberOfProducts: number;
  numberOfCustomers: number;
  numberOfDiscountProducts: number;
  numberOfActiveOrders: number;

  constructor(private productService: ProductService,
              private orderService: OrderService) { }

  ngOnInit() {
    this.productService.getNumberOfProducts().subscribe(count => this.numberOfProducts = count);
    this.orderService.getNumberOfCustomers().subscribe(count => this.numberOfCustomers = count);
    this.productService.getCountDiscountProducts().subscribe(count => this.numberOfDiscountProducts = count);
    this.orderService.getNumberOfActiveOrders().subscribe(count => this.numberOfActiveOrders = count);
  }

}
