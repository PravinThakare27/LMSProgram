import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../bookservice.service';
import { issuedetail } from '../issuedetail';
@Component({
  selector: 'app-returnbooktable',
  templateUrl: './returnbooktable.component.html',
  styleUrls: ['./returnbooktable.component.css']
})
export class ReturnbooktableComponent implements OnInit {

  constructor(private ser:BookserviceService) { }
data:issuedetail[];
  ngOnInit(): void {
    this.ser.returnbooktable().subscribe(result=>this.data=result);
  }

}
