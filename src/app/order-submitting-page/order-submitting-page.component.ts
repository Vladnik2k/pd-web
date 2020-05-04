import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {OrderService} from '../shared/services/order.service';
import {BucketService} from '../shared/services/bucket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-submitting-page',
  templateUrl: './order-submitting-page.component.html',
  styleUrls: ['./order-submitting-page.component.scss']
})
export class OrderSubmittingPageComponent implements OnInit {

  form: FormGroup;
  showError = false;

  constructor(private orderService: OrderService,
              private bucketService: BucketService,
              private router: Router) { }

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
      .subscribe(orderId => {
        this.bucketService.clearBucket();
        this.router.navigate(['order/' + orderId]);
    }, err => this.showError = true);
  }

  mapToObj(map: Map<number, number>): any {
    const obj = {};
    Array.from(map.keys()).forEach(key => obj[key] = map.get(key));

    return obj;
  }

}
