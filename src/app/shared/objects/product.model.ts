import {IngredientModel} from './ingredient.model';

export interface ProductModel {

  id: number;
  name: string;
  description: string;
  price: number;
  categoryId: number;
  imageUrl: string;
  ingredients: IngredientModel[];

}
