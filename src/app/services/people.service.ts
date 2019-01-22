import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(public http:HttpClient) { }
  public getPeoplesData(){
    return this.http.get('./assets/people.json')
  }
}
