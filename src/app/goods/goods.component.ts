import { Component, OnInit } from '@angular/core';
import {CategoriesService} from './categories.service';
import {CategoryModel} from '../objects/CategoryModel';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  categories: CategoryModel[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

}
