import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../bookservice.service';
import { issuedetail } from '../issuedetail';

@Component({
  selector: 'app-allissuebook',
  templateUrl: './allissuebook.component.html',
  styleUrls: ['./allissuebook.component.css']
})
export class AllissuebookComponent implements OnInit {

  constructor(private ser:BookserviceService) { }
data:issuedetail[];
  ngOnInit(): void {
    this.ser.allissuedetail().subscribe(result=>this.data=result);
  }
 
}
