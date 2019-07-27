import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search1'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, myInput: any): any {
    if(myInput=="" || myInput==undefined || myInput==null)
    {
      return value;
    }
    else
    {
      return value.filter(item =>{ return item['userTask'].toLowerCase().includes(myInput.toLowerCase()); })
    }
  }

}
