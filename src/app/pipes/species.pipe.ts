import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'species',
})
export class SpeciesPipe<T extends { [x: string]: any }>
  implements PipeTransform
{
  transform(list: T[], species: string = ''): T[] {
    if (!Array.isArray(list) || !species) {
      return list;
    }

    if (species === 'összes') {
      return list;
    } else {
      return list.filter((item) => item['species'] === species);
    }
  }
}
