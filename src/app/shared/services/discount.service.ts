import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryModel} from '../objects/category.model';
import {Constants} from '../Constants';

@Injectable({
  providedIn: 'root',
})
export class DiscountService {

  private url = Constants.API_URL + 'discount';

  constructor(private httpClient: HttpClient) {}

  getMaxDiscount(): Observable<number> {
    return this.httpClient.get<number>(`${this.url}/max`);
  }

}
