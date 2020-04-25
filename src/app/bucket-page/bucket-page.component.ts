import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../shared/objects/product.model';
import {ProductService} from '../shared/services/product.service';
import {BucketService} from '../shared/services/bucket.service';
import {BucketProductModel} from '../shared/objects/bucket-product.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bucket-page',
  templateUrl: './bucket-page.component.html',
  styleUrls: ['./bucket-page.component.scss']
})
export class BucketPageComponent implements OnInit {

  products: ProductModel[] = [];
  bucketProducts: BucketProductModel[] = [];

  allSum = 0;

  constructor(private bucketService: BucketService,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
    const bucket = this.bucketService.getBucket();
    const productIds: number[] = Array.from(bucket.keys());
    this.productService.getProductsByIds(productIds)
      .subscribe(products => {
        this.products = products;
        this.updateProducts();
      });
  }

  addProduct(productId: number): void {
    this.bucketService.addProduct(productId);
    this.updateProducts();
  }

  deleteProduct(productId: number): void {
    this.bucketService.deleteProduct(productId);
    this.updateProducts();
  }

  updateProducts(): void {
    const bucket = this.bucketService.getBucket();
    this.products = this.products.filter(product => bucket.get(product.id));

    this.bucketProducts = this.products
      .map(product => {
        return {
          id: product.id,
          name: product.name,
          quantity: bucket.get(product.id),
          priceForOne: product.price,
          priceAll: bucket.get(product.id) * product.price
        };
      });

    this.allSum = this.bucketProducts.reduce((sum: number, bucketProduct: BucketProductModel) => sum + bucketProduct.priceAll, 0);
  }

  goToOrderForm() {
    this.router.navigate(['/order']);
  }
}
