import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public collection!: Order[];
  public title = 'List Orders';
  public headers = [
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];
  constructor(private ordersService: OrdersService) {
    this.ordersService.collection.subscribe((data) => {
      console.log(data);
      this.collection = data;
    });
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.title = 'New list orders';
  }

  /*  A EVITER : UTILISER LES PIPES
  public total(val: number, coeff: number, tva?: number): number {
    if (tva) {
      return val * coeff * (1 + tva / 100);
    }
    return val * coeff;
  }
  */
}
