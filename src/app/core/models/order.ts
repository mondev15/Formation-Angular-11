import { StateOrder } from '../enums/state-order.enum';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  typePresta!: string; // !: type string ou null
  client!: string;
  comment!: string;
  id!: number;
  /*
  Partial<Type>
  Constructs a type with all properties of Type set to optional.
  This utility will return a type that represents all subsets of a given type.
  */
  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
