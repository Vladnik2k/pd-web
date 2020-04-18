import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryModel} from '../objects/CategoryModel';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {

  private url = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<CategoryModel[]> {
    return this.httpClient.get<CategoryModel[]>(this.url + 'category');
  }

}
