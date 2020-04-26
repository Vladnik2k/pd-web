import {Component, OnInit} from '@angular/core';
import {OrderService} from '../shared/services/order.service';
import {ActivatedRoute} from '@angular/router';
import {OrderModel} from '../shared/objects/order.model';
import {ProductService} from '../shared/services/product.service';
import {ProductModel} from '../shared/objects/product.model';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  order: OrderModel;
  products: Map<ProductModel, number> = new Map<ProductModel, number>();

  constructor(private orderService: OrderService,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const orderId = +this.activatedRoute.snapshot.paramMap.get('orderId');
    this.orderService.getOrderById(orderId).subscribe(order => {
      this.order = order;
      const map: Map<number, number> = new Map<number, number>(JSON.parse(order.products));
      this.productService.getProductsByIds(Array.from(map.keys())).subscribe(products => {
        map.forEach((value, key) => this.products.set(products.find(p => p.id === key), value));
      });
    });
  }

}
