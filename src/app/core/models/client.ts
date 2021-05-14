import { StateClient } from '../enums/state-client.enum';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  totalCaHt = 0;
  name!: string;
  tva = 20;
  state = StateClient.ACTIVE;
  id!: number;
}
