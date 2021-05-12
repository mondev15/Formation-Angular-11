import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  // --- get item by id
}
