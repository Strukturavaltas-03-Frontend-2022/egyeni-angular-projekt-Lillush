import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size',
})
export class SizePipe<T extends { [x: string]: any }> implements PipeTransform {
  transform(list: T[], size: string = ''): T[] {
    if (!Array.isArray(list) || !size) {
      return list;
    }

    if (size === 'összes') {
      return list;
    } else if (size === 'kicsi') {
      return list.filter((item) => item['size'] === size);
    } else if (size === 'közepes') {
      return list.filter((item) => item['size'] === size);
    } else if (size === 'nagy') {
      return list.filter((item) => item['size'] === size);
    } else {
      return list;
    }
  }
}
