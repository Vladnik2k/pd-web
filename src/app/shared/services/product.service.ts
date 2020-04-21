import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Constants} from '../Constants';
import {ProductModel} from '../objects/ProductModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = Constants.API_URL + 'product';

  constructor(private httpClient: HttpClient) {}

  getProduct(): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(this.url);
  }
}
