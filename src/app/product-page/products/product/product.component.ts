import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../../shared/objects/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductModel;

  constructor() { }

  ngOnInit() {
  }

}
