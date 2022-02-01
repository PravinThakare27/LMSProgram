import { Component, OnInit } from '@angular/core';
import {BookserviceService} from 'src/app/studdashboard/bookservice.service';
import { Router } from '@angular/router'
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-showstudtable',
  templateUrl: './showstudtable.component.html',
  styleUrls: ['./showstudtable.component.css']
})
export class ShowstudtableComponent implements OnInit {

  data:any;
  constructor(private stud:BookserviceService,private route:Router,private mat:MatSnackBar) { }

  ngOnInit(): void {
    this.stud.getstudent().subscribe(stud=>this.data=stud);
  }
  

}
