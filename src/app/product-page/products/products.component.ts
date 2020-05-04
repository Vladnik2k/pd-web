import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../../shared/objects/product.model';
import {BucketService} from '../../shared/services/bucket.service';
import {TimeInterval} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() products: ProductModel[] = [];

  addedProduct: ProductModel;
  timeout;

  @Output() addProductToBucket: EventEmitter<number> = new EventEmitter<number>();

  constructor(private bucketService: BucketService) { }

  ngOnInit() {
  }

  addToBucket(productId): void {
    clearTimeout(this.timeout);
    this.bucketService.addProduct(productId);
    this.addedProduct = this.products.find(product => product.id === productId);
    this.timeout = setTimeout(() => {
      this.addedProduct = null;
    }, 5000);
  }

}
