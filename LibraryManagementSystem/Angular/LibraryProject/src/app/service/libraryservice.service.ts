import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../Student';

@Injectable({
  providedIn: 'root'
})
export class LibraryserviceService {

  constructor(private http:HttpClient) { }
  login(data:Student)
  {
return this.http.post("http://localhost:81/login",data,{responseType:"text" as "json"});
  }
}
