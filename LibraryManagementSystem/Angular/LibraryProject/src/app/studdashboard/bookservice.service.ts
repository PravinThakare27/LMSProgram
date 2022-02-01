import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './Book';
import {Student} from '../Student';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { issuedetail } from './issuedetail';
import { Librarian } from '../adminportal/Library';
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http:HttpClient) { }

  addbook(data:Book)
  {
  return  this.http.post("http://localhost:81/addbook",data,{responseType:"text" as "json"});
  }
  public allbook()
  {
    return this.http.get("http://localhost:81/allbook");
  }
  public getstudent()
  {
    return this.http.get("http://localhost:81/allstudents");
  }
  public addstud(data:any)
  {
    return  this.http.post("http://localhost:81/addstud",data,{responseType:"text" as "json"});
  }
  public issuebook(data:any)
  {
    return  this.http.post("http://localhost:81/issuebook",data,{responseType:"text" as "json"});
  }
  public allissuedetail():Observable<issuedetail[]>
  {
return this.http.get<issuedetail[]>("http://localhost:81/allissuedetail");
  }
  returnbooktable():Observable<issuedetail[]>
 {
  return this.http.get<issuedetail[]>("http://localhost:81/returnbooktable");
 }
  deleteissuedetail(id:number)
 {
return this.http.delete("http://localhost:81/deleteissuedetail/"+id,{responseType:"text" as "json"});
 }
 editissuedetail(id:number):Observable<Book[]>
 {
 return  this.http.get<Book[]>("http://localhost:81/editissuedetail/"+id); 
  
 }
 updatebook(data:Book)
 {
   return this.http.post("http://localhost:81/updatebook",data,{responseType:"text" as "json"});
 }
 deletestud(id:number)
 {
  return this.http.delete("http://localhost:81/deletestud/"+id,{responseType:"text" as "json"});
 }

  
  editstudfetchdetail(id:number):Observable<Student[]>
  {
  return  this.http.get<Student[]>("http://localhost:81/editstuddetail/"+id); 
  }
 updatestud(data:Student)
 {
  return this.http.post("http://localhost:81/updatestud",data,{responseType:"text" as "json"});
 }
 returnbook(data:any)
 {
return this.http.post("http://localhost:81/returnbook/",data,{responseType:"text" as "json"});
 }
//  addlibrarian(data:Library)
//  {
//  return  this.http.post("http://localhost:81/addlibrarian",data,{responseType:"text" as "json"});
//  }
//  viewlibrarian():Observable<any>
//  {
//    return this.http.get("http://localhost:81/viewLibrarian");
//  }

}
