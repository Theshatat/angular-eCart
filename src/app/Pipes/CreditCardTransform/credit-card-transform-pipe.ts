import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardTransform',
  standalone:true
})
export class CreditCardTransformPipe implements PipeTransform {
  transform(value: string): string {

    let result = "";
    for(let i=0;i<value.length;i++){
      result += value[i];
      
      if((i+1)%4 ===0  && i !== value.length - 1){
        result += "-";
      }
    }
    return result;
  }
}
