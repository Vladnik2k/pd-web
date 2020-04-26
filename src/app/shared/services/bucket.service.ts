import {Injectable} from '@angular/core';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BucketService {

  private bucketName = 'BUCKET';

  constructor(private storageService: LocalStorageService) {
  }

  addProduct(productId): void {
    const products: Map<number, number> = this.getBucket();

    if (products.has(productId)) {
      products.set(productId, +products.get(productId) + 1);
    } else {
      products.set(productId, 1);
    }
    this.saveBucket(products);
  }

  deleteProduct(productId): void {
    const products: Map<number, number> = this.getBucket();

    if (products.has(productId)) {
      const newValue = +products.get(productId) - 1;
      newValue ? products.set(productId, newValue) : products.delete(productId);
      this.saveBucket(products);
    }
  }

  getBucket(): Map<number, number> {
    const map = this.storageService.get(this.bucketName);
    return new Map<number, number>(map ? JSON.parse(map) : '');
  }

  saveBucket(products: Map<number, number>): void {
    this.storageService.save(this.bucketName, JSON.stringify(Array.from(products.entries())));
  }

  clearBucket(): void {
    this.storageService.remove(this.bucketName);
  }

}
