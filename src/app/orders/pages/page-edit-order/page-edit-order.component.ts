import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  public item$!: Observable<Order>;

  // on peut le faire dans le constructor ou dans le ngOnInit
  constructor(
    private route: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.item$ = this.ordersService.getItemById(id);
    });
  }

  ngOnInit(): void {}

  public action(item: Order): void {
    this.ordersService.update(item).subscribe((res) => {
      // traiter les cas d'erreurs de l'api
      // ici cela ne risque pas d'arriver car on utilise jsonServer
      this.router.navigate(['orders']);
    });
  }
}
