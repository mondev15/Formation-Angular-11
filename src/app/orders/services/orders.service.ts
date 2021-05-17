import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // par convention les noms des observables se terminent par $
  private collection$ = new BehaviorSubject<Order[]>([]);
  private urlApi = environment.urlApi;

  // il faut injecter ce service dans un constructeur d'un autre composant
  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  private refreshCollection() {
    this.http
      .get<Order[]>(`${this.urlApi}/orders`)
      .pipe(
        map((tab) => {
          return tab.map((obj) => {
            return new Order(obj);
          });
        })
      )
      .subscribe((data) => {
        this.collection$.next(data);
      });
  }

  public get collection(): BehaviorSubject<Order[]> {
    return this.collection$;
  }

  public set collection(col: BehaviorSubject<Order[]>) {
    this.collection$ = col;
  }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = { ...item }; // spread operation js (es6) : desctructuring;
    obj.state = state;
    return this.update(obj);
  }

  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item).pipe(
      tap((flux) => {
        // console.log(flux);
        this.refreshCollection();
      })
    );
  }

  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item).pipe(
      tap((flux) => {
        // console.log(flux);
        this.refreshCollection();
      })
    );
  }

  public getItemById(id: Number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }

  public delete(id: number): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}/orders/${id}`).pipe(
      tap((flux) => {
        // console.log(flux);
        this.refreshCollection();
      })
    );
  }
}
