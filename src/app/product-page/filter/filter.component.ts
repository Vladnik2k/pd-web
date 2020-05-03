import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryModel} from '../../shared/objects/category.model';
import {LabelType, Options} from 'ng5-slider';
import {combineLatest} from 'rxjs';
import {CategoryService} from '../../shared/services/category.service';
import {ProductService} from '../../shared/services/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() categories: CategoryModel[] = [];
  options: Options = {};
  chosenCategories: CategoryModel[] = [];
  text = '';
  minPrice = 0;
  maxPrice = 0;

  @Output() changeCategories: EventEmitter<CategoryModel[]> = new EventEmitter<CategoryModel[]>();
  @Output() changeText: EventEmitter<string> = new EventEmitter<string>();
  @Output() changePriceRange: EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor(private categoryService: CategoryService,
              private productService: ProductService) { }

  ngOnInit() {
    combineLatest(this.productService.getMinPrice(), this.productService.getMaxPrice()).subscribe((range) => {
      this.minPrice = range[0];
      this.maxPrice = range[1];
      this.options.floor = range[0];
      this.options.ceil = range[1];
    });
  }

  addCategory($event): void {
    const value = +$event.target.value;
    if (!this.chosenCategories.filter(c => c.id === value).length) {
      this.chosenCategories.push(this.categories.find(c => c.id === value));
      this.changeCategories.emit(this.chosenCategories);
    }
    $event.target.selectedIndex = 0;
  }

  removeCategory(id): void {
    this.chosenCategories = this.chosenCategories.filter(c => c.id !== id);
    this.changeCategories.emit(this.chosenCategories);
  }

  changeSearchText($event): void {
    const newText = $event.target.value;
    if (newText !== this.text) {
      this.text = newText;
      this.changeText.emit(this.text);
    }
  }

  changeValue($event): void {
    this.changePriceRange.emit([$event.value, $event.highValue]);
  }
}
