import { UnaryOperator } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LibrarianserviceService } from '../librarianservice.service';
import { Librarian } from '../Library';
@Component({
  selector: 'app-viewlibrarian',
  templateUrl: './viewlibrarian.component.html',
  styleUrls: ['./viewlibrarian.component.css']
})
export class ViewlibrarianComponent implements OnInit {

  constructor(private ser:LibrarianserviceService) { }
data:Librarian[];
  ngOnInit(): void {
    this.ser.viewlibrarian().subscribe(result=>this.data=result)
  }
}
