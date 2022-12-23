import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeass'
})
export class PipeassPipe implements PipeTransform {

  transform(value: any): any {
    return value.filter(function(value){
      if (value.gender=='Male') {
        return value.name = "Mr. " + value.name;
      } else {
        return value.name = "Mrs. " + value.name;
      }
    });
  }

}
