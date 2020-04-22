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

  getProduct(categories: number[], search: string): Observable<ProductModel[]> {
    return this.httpClient.post<ProductModel[]>(this.url, { categoryIds: categories, searchText: search } );
  }

  getMaxPrice(): Observable<number> {
    return this.httpClient.get<number>(`${this.url}/max`);
  }

  getMinPrice(): Observable<number> {
    return this.httpClient.get<number>(`${this.url}/min`);
  }

}
