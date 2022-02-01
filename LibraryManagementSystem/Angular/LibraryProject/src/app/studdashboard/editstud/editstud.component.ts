import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../bookservice.service';
import { Student } from 'src/app/Student';
import { ActivatedRoute,Router } from '@angular/router'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-editstud',
  templateUrl: './editstud.component.html',
  styleUrls: ['./editstud.component.css']
})
export class EditstudComponent implements OnInit {
stud:any;
  constructor(private ser:BookserviceService,private routee:Router,private route:ActivatedRoute,private mat:MatSnackBar) { }
num:number;
data:Student=new Student();
  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
      console.warn(params);
      this.num=params.data
    })
    this.ser.editstudfetchdetail(this.num).subscribe(result=>this.stud=result);
  }
  
  updatestud()
  {
    
    this.data=this.stud;
    this.ser.updatestud(this.data).subscribe(result=>console.warn(result));
    console.warn(this.stud); 
    this.routee.navigate(['/dashboard']);
    this.mat.open('Record is updated','ok',{
      duration:3000,
    });
  }
}
