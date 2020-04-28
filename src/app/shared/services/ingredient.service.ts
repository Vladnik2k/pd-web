import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Constants} from '../Constants';
import {IngredientModel} from '../objects/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {

  private url = Constants.API_URL + 'ingredient';

  constructor(private httpClient: HttpClient) {}

  getAllByProductId(productId: number): Observable<IngredientModel[]> {
    return this.httpClient.get<IngredientModel[]>(`${this.url}/${productId}`);
  }

}
