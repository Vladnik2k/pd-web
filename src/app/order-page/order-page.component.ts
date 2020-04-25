import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {OrderService} from '../shared/services/order.service';
import {BucketService} from '../shared/services/bucket.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  form: FormGroup;

  constructor(private orderService: OrderService,
              private bucketService: BucketService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
      customerName: new FormControl(''),
      customerSurname: new FormControl(''),
      deliveryAddress: new FormControl('')
    });
  }

  submitOrder(): void {
    const newOrder = this.form.getRawValue();
    newOrder.products = JSON.stringify(this.mapToObj(this.bucketService.getBucket()));
    this.orderService.createOrder(newOrder)
      .subscribe(_ => {
    });
  }

  mapToObj(map: Map<number, number>): any {
    const obj = {};
    const keys = Array.from(map.keys());
    for (let i = 0; i < keys.length; i++) {
      obj[keys[i]] = map.get(keys[i]);
    }

    return obj;
  }

}
