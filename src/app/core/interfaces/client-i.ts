import { StateClient } from '../enums/state-client.enum';

export interface ClientI {
  name: string;
  totalCaHt: number;
  tva: number;
  state: StateClient;
  id: number;
}
