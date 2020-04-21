import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryModel} from '../objects/CategoryModel';
import {Constants} from '../Constants';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private url = Constants.API_URL + 'category';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<CategoryModel[]> {
    return this.httpClient.get<CategoryModel[]>(this.url);
  }

}
