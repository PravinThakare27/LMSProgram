import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../bookservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent implements OnInit {
result:any;
  constructor(private ser:BookserviceService, private mat:MatSnackBar) { }
  return=new FormGroup(
    {
      bookid:new FormControl(''),
      id:new FormControl('')
    }
  )
  ngOnInit(): void {
  }

 returnbook(data:any)
 {
console.warn(data);
this.ser.returnbook(data).subscribe(result=>this.result=result);
this.return.reset();
if(this.result=="return")
{
  this.mat.open('Book is returned','',{
    duration:5000,
  });
}
else
{
  this.mat.open('Book is not returned','',{
    duration:5000,
  });
  
}
 }
}
