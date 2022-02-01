import { Component, OnInit } from '@angular/core';
import {BookserviceService} from 'src/app/studdashboard/bookservice.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Book} from 'src/app/studdashboard/Book';
@Component({
  selector: 'app-showbooktable',
  templateUrl: './showbooktable.component.html',
  styleUrls: ['./showbooktable.component.css']
})
export class ShowbooktableComponent implements OnInit {

 
  constructor(private ser:BookserviceService
    ) { }
book:any;

  ngOnInit(): void {
    this.ser.allbook().subscribe((result)=>this.book=result);
    console.warn(this.book);
  }
  
   


}
