import { Component } from '@angular/core';
import { products_db } from 'src/app/core/db/product.db';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  rates = [1, 2, 3, 4, 5]
  items: any [] = products_db;
}
