import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../bookservice.service';
import {Book} from '../Book';
import { Router } from '@angular/router'
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  constructor(private ser:BookserviceService,private route:Router,private mat:MatSnackBar
    ) { }
book:any;

  ngOnInit(): void {
    this.ser.allbook().subscribe((result)=>this.book=result);
    console.warn(this.book);
  }
  delete(b:any)
  {
    
this.ser.deleteissuedetail(b).subscribe((result)=>console.warn(result));
console.warn(b);
this.route.navigate(['/','dashboard']);
this.mat.open('Book is deleted','ok');


  }
    edit(d:number)
    {
      console.warn(d);
      this.ser.editissuedetail(d);
      this.route.navigate(["dashboard/editbook"],{queryParams:{data:d}});
    }

}
