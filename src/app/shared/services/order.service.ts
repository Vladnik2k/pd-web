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

  createOrder(newOrder: any): Observable<number> {
    return this.httpClient.post<number>(this.url, newOrder);
  }

  getOrderById(orderId: number): Observable<OrderModel> {
    return this.httpClient.get<OrderModel>(`${this.url}/${orderId}`);
  }

  getNumberOfCustomers(): Observable<number> {
    return this.httpClient.get<number>(`${this.url}/customers-count`);
  }

  getNumberOfActiveOrders(): Observable<number> {
    return this.httpClient.get<number>(`${this.url}/active-orders`);
  }

}
