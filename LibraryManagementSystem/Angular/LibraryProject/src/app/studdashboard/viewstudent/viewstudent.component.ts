import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../bookservice.service';
import { Router } from '@angular/router'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {
data:any;
  constructor(private stud:BookserviceService,private route:Router,private mat:MatSnackBar) { }

  ngOnInit(): void {
    this.stud.getstudent().subscribe(stud=>this.data=stud);
  }
  editstud(id:number)
  {
    this.stud.editstudfetchdetail(id);
    this.route.navigate(["dashboard/editstud"],{queryParams:{data:id}});
  }
  deletestud(id:number)
  {
this.stud.deletestud(id).subscribe(result=>console.warn(result))
this.route.navigate(['/','dashboard']);
this.mat.open('Record is deleted','ok');

  }

}
