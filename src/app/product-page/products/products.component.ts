import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../shared/objects/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() products: ProductModel[] = [];

  constructor() { }

  ngOnInit() {
  }

}
