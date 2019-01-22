import { Pipe, PipeTransform } from '@angular/core';
import {CommonModule} from "@angular/common";
@Pipe({
  name: 'searchPeople'
})
export class SearchPeoplePipe implements PipeTransform {

  transform(list: any, searchText?: any): any {
    if(!list) return [];
    if(!searchText) return list;

    searchText = searchText.toLowerCase();

    return list.filter(data=>{
      return data.name.toLowerCase().includes(searchText);
    });
  }

}
