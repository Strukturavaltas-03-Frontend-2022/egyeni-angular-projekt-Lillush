import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe<T extends { [x: string]: any }>
  implements PipeTransform
{
  transform(list: T[], gender: string = ''): T[] {
    if (!Array.isArray(list) || !gender) {
      return list;
    }

    if (gender === 'összes') {
      return list;
    } else {
      return list.filter((item) => item['gender'] === gender);
    }
  }
}
