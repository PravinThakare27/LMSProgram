import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Student';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BookserviceService} from '../bookservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-addstud',
  templateUrl: './addstud.component.html',
  styleUrls: ['./addstud.component.css']
})
export class AddstudComponent implements OnInit {
  message:any;
  stud:Student =new Student();
  constructor(private ser:BookserviceService,private mat:MatSnackBar) { }
  addstudin =new FormGroup(
    {
      firstname:new FormControl(''),
      lastname:new FormControl(''),
      gender:new FormControl(''),

      mobile:new FormControl(''),
      emailid:new FormControl(''),
      password:new FormControl(''),
      dob:new FormControl(''),
     
    }
  )
  ngOnInit(): void {
  }
 addstud()
 {
  let response=this.ser.addstud(this.stud);
  response.subscribe(result=>
this.message=result
  )

  if(this.message=="save")
{
 
  this.mat.open(' New record is not added','',{
    duration:5000,
  });
 this.addstudin.reset();
}
else
{
  this.mat.open('  New Record is  added','',{
    duration:5000,
  });
  this.addstudin.reset();
 
}
 }
 

}
