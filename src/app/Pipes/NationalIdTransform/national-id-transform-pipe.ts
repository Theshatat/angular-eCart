import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalIdTransform',
  standalone:true
})
export class NationalIdTransformPipe implements PipeTransform {
  transform(value: string, code:string ="FullDate"): string {
    let yy = "";
    let mm ="";
    let dd ="";

    if(code =="FullDate"){
      if(value[0] == "3"){
      yy = "20" + value[1] + value[2];
      mm =  value[3] + value[4];
      dd =  value[5] + value[6];
      return dd + "-" + mm + "-" + yy;
    }
    else{
      yy = "19" + value[1] + value[2];
      mm =  value[3] + value[4];
      dd =  value[5] + value[6];
      return dd + "-" + mm + "-" + yy;
    }
    }
    switch(code){
      case "YY":
        return value[1] + value[2];
      case "MM":
        return value[3] + value[4];
      case "DD":
        return value[5] + value[6];
      default:
        return dd + "-" + mm + "-" + yy;
    }
  }
}
