import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../bookservice.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Book} from '../Book';

import {FormGroup, FormControl} from '@angular/forms' 

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private ser:BookserviceService, private mat:MatSnackBar) { }
  
  message:any;
  book:Book=new Book();
  addb =new FormGroup(
    {
isbn:new FormControl(''),
author:new FormControl(''),
title:new FormControl(''),
category:new FormControl(''),
publisher:new FormControl(''),
price:new FormControl(''),
quantity:new FormControl('')}
  )

  ngOnInit(): void {
  }
  public addbook()
  {
    
let response =this.ser.addbook(this.book);
response.subscribe(result=>this.message=result);
this.addb.reset();
console.warn(this.message);

  this.mat.open('  New book is added','',{
    duration:5000,
  });


  }
}
