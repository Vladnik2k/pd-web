import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../../shared/objects/CategoryModel';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() categories: CategoryModel[] = [];

  constructor() { }

  ngOnInit() {
  }
}
