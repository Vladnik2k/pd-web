import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Constants} from '../Constants';
import {ProductModel} from '../objects/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = Constants.API_URL + 'product';

  constructor(private httpClient: HttpClient) {}

  getProductsByFilter(categories: number[], search: string): Observable<ProductModel[]> {
    return this.httpClient.post<ProductModel[]>(`${this.url}/filter`, { categoryIds: categories, searchText: search } );
  }

  getProductsByIds(productIds: number[]): Observable<ProductModel[]> {
    return this.httpClient.post<ProductModel[]>(`${this.url}/ids`, productIds);
  }

  getProductById(productId: number): Observable<ProductModel> {
    return this.httpClient.get<ProductModel>(`${this.url}/${productId}`);
  }

  getMaxPrice(): Observable<number> {
    return this.httpClient.get<number>(`${this.url}/max`);
  }

  getMinPrice(): Observable<number> {
    return this.httpClient.get<number>(`${this.url}/min`);
  }

}
