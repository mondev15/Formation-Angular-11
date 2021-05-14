import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // par convention les noms des observables se terminent par $
  private collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;

  // il faut injecter ce service dans un constructeur d'un autre composant
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`);
  }

  public get collection(): Observable<Order[]> {
    return this.collection$;
  }

  public set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }

  // --- add item to collection
  // --- update item in collection
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = { ...item }; // spread operation js (es6) : desctructuring;
    obj.state = state;
    return this.update(obj);
  }

  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

  // --- get item by id
}
