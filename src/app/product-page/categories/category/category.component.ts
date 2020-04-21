import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../../../shared/objects/CategoryModel';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() category: CategoryModel;

  constructor() { }

  ngOnInit() {
  }

}
