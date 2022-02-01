import { Component, OnInit } from '@angular/core';
import { LibrarianserviceService } from '../librarianservice.service';
import {BookserviceService} from 'src/app/studdashboard/bookservice.service';
import { Librarian } from '../Library';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-addlibrarian',
  templateUrl: './addlibrarian.component.html',
  styleUrls: ['./addlibrarian.component.css']
})
export class AddlibrarianComponent implements OnInit {

  constructor(private ser:LibrarianserviceService,private ser1:BookserviceService, private mat:MatSnackBar,private route:Router) { }
  data:Librarian=new Librarian();
  requiredForm =new FormGroup(
    {
name:new FormControl(''),
emailid:new FormControl(''),
password:new FormControl(''),
mobile:new FormControl(''),
}
  )
  data1:any;
  num:number;
  message:any;
  ngOnInit(): void {
  }

  addlibrarian()
  {
   
this.data1=this.data;
let response=this.ser.addlibrarian(this.data);

response.subscribe(result=>{
  
  this.message=result;
}
  );
console.warn(this.data);

if(this.message=="save")
{
 
  this.mat.open('Librarian new record is not added','',{
    duration:5000,
  });
 this.requiredForm.reset();
}
else
{
  this.mat.open('Librarian new record is added','',{
    duration:5000,
  });
  this.requiredForm.reset();
 
}
  }
}
