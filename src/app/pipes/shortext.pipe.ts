import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortext'
})
export class ShortextPipe implements PipeTransform {

  transform(value: string): any {
    
    if (value.length < 150){
      return value;
    }

    return value.substr(0, 150) + '...';
  }

}
