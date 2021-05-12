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
      this.collection = data;
    });
  }
  ngOnInit(): void {}
  public changeTitle(): void {
    this.title = 'New list orders';
  }
}
