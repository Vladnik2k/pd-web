import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryModel} from '../../../shared/objects/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() category: CategoryModel;
  @Output() removeCategory: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  remove(): void {
    this.removeCategory.emit(this.category.id);
  }

}
