import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/services/product.service';
import {ActivatedRoute} from '@angular/router';
import {IngredientService} from '../shared/services/ingredient.service';
import {ProductModel} from '../shared/objects/product.model';
import {IngredientModel} from '../shared/objects/ingredient.model';

@Component({
  selector: 'app-product-info-page',
  templateUrl: './product-info-page.component.html',
  styleUrls: ['./product-info-page.component.scss']
})
export class ProductInfoPageComponent implements OnInit {

  product: ProductModel;
  ingredients: IngredientModel[];

  constructor(private productService: ProductService,
              private ingredientService: IngredientService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const productId = +this.activatedRoute.snapshot.paramMap.get('productId');
    this.productService.getProductById(productId)
      .subscribe(product => this.product = product);
    this.ingredientService.getAllByProductId(productId)
      .subscribe(ingredients => this.ingredients = ingredients);
  }

}
