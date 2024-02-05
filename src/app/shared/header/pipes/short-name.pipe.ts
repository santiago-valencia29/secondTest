import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortName'
})
export class ShortNamePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    const commaIndex: number = value.indexOf(' ');
    if (commaIndex === -1) {
      return value;
    }

    return '' + value[0].toUpperCase() + value[commaIndex + 1].toUpperCase();
  }
}
