import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Librarian} from './Library';

@Injectable({
  providedIn: 'root'
})
export class LibrarianserviceService {

  constructor(private http:HttpClient) { }

  addlibrarian(data:Librarian)
  {
    
  return  this.http.post("http://localhost:81/addli/"+data.name+"/"+data.gmail+"/"+data.password+"/"+data.mobile,{responseType:"text" as "json"});
  }
  // addlibrarian(data:any)
  // {
  //   return  this.http.post("http://localhost:81/addli",data,{responseType:"text" as "json"});
  // }

  viewlibrarian():Observable<Librarian[]>
  {
    return this.http.get<Librarian[]>("http://localhost:81/viewLibrarian");
  }
}
