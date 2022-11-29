import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe<T extends { [x: string]: any }> implements PipeTransform {
  transform(list: T[], age: string = ''): T[] {
    if (!Array.isArray(list) || !age) {
      return list;
    }

    if (age === 'young') {
      return list.filter((item) => item['age'] <= 3);
    } else if (age === 'mid') {
      return list.filter((item) => item['age'] > 3 && item['age'] <= 5);
    } else if (age === 'old') {
      return list.filter((item) => item['age'] > 5);
    } else {
      return list;
    }
  }
}
