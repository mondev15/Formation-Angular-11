import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
  transform(val: number, coeff: number, tva?: number): number {
    if (tva) {
      return val * coeff * (1 + tva / 100);
    }
    return val * coeff;
  }
}
