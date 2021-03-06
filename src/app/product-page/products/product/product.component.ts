import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../../../shared/objects/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductModel;
  url: string;

  @Output() addToBucket: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.url = `url(${this.product.imageUrl})`;
  }

  bucket($event): void {
    $event.stopPropagation();
    this.addToBucket.emit(this.product.id);
  }

}
