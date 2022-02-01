import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../bookservice.service';
import {Book} from '../Book';
import { ActivatedRoute,Router } from '@angular/router'
import { FormGroup } from '@angular/forms';

import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  num:number;
  constructor(private ser:BookserviceService,private route:ActivatedRoute,private mat:MatSnackBar,private routee:Router) { }
  book:any;
  data:Book=new Book();

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
      console.warn(params);
      this.num=params.data
    })
    this.ser.editissuedetail(this.num).subscribe(result=>this.book=result)

  }
  updatebook()
  {
  
   this.data=this.book;
   this.ser.updatebook(this.data).subscribe(result=>console.warn(result));
   console.warn(this.book); 
   this.routee.navigate(['/dashboard']);
   this.mat.open('Book is updated','ok',{
     duration:3000,
   });
  }
}
