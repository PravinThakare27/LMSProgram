import { Component, OnInit } from '@angular/core';
import {Student} from '../Student';
import {AbstractControl,FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibraryserviceService } from '../service/libraryservice.service';
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private ser:LibraryserviceService,private route:Router,private snak:MatSnackBar) { }
 
  message:any;
  stud:Student =new Student();
 

 
  
  ngOnInit(): void {

  }
 
  Login()
  {
   
   
    let response=this.ser.login(this.stud).subscribe(response =>{
      console.log(response);
       if(response=="false")
       {
        Swal.fire('Success','Librarian is Login','success');
         this.route.navigate(["/dashboard"]);
       }
       else if(response=="admin")
       {
        Swal.fire('Success','Admin is Login','success');
        this.route.navigate(["/adminprofile"]);
       }
       else
       {
        this.snak.open('Login Invalid','',{
          duration:5000,
        });
       }
    })
    // response.subscribe(result=>this.message=result);   
    
  }
}
      
