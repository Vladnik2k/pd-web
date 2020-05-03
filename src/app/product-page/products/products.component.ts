import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../../shared/objects/product.model';
import {BucketService} from '../../shared/services/bucket.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() products: ProductModel[] = [];

  addedProduct: ProductModel;

  @Output() addProductToBucket: EventEmitter<number> = new EventEmitter<number>();

  constructor(private bucketService: BucketService) { }

  ngOnInit() {
  }

  addToBucket(productId): void {
    this.bucketService.addProduct(productId);
    this.addedProduct = this.products.find(product => product.id === productId);
    setTimeout(() => {
      this.addedProduct = null;
    }, 5000);
  }

}
