import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient){

   }

   getData(){
     let u = 'http://jsonplaceholder.typicode.com/users/1';
     return this.http.get(u) 
   }
}
