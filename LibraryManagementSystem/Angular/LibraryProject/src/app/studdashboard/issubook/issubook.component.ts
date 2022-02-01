import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms' 
import { issuedetail } from '../issuedetail';
import {BookserviceService} from '../bookservice.service';
import {Book} from '../Book';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router'
@Component({
  selector: 'app-issubook',
  templateUrl: './issubook.component.html',
  styleUrls: ['./issubook.component.css']
})
export class IssubookComponent implements OnInit {
  issue:issuedetail=new issuedetail(); 
  b:any;
 studdata:any;
  constructor(private ser:BookserviceService, private mat:MatSnackBar,private route:Router) { }
  requiredForm =new FormGroup(
    {
      bookid:new FormControl(''),
      isbn:new FormControl(''),
      title:new FormControl(''),
      publisher:new FormControl(''),
      id:new FormControl(''),
      name:new FormControl(''),
      emailid:new FormControl(''),
    })
  value:string;
  issuebook()
  {
    console.warn(this.issue);
    this.ser.issuebook(this.issue).subscribe(data=>console.warn(data));
    this.mat.open('Student issue book successfully','',{
      duration:5000,
    });
    
   this.requiredForm.reset();
  }
  ngOnInit(): void {
  }

}
