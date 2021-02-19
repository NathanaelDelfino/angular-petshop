import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.services';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent implements OnInit {
  public products$: Observable<Product[]>;
  constructor(private data: DataService) { }
  public busy = false;

  ngOnInit(): void {
    this.busy = true;
    this.products$ = this.data.getProducts();
    this.busy = false;
  }

}
