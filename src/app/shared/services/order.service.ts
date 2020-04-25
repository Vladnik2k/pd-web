import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Constants} from '../Constants';
import {OrderModel} from '../objects/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {

  private url = Constants.API_URL + 'order';

  constructor(private httpClient: HttpClient) {}

  createOrder(newOrder: any): Observable<OrderModel[]> {
    return this.httpClient.post<OrderModel[]>(this.url, newOrder);
  }

}
