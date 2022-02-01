import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LibraryserviceService } from './service/libraryservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { StuddashboardComponent } from './studdashboard/studdashboard.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './studdashboard/welcome/welcome.component';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { SlidebarComponent } from './studdashboard/slidebar/slidebar.component';
import { AddbookComponent } from './studdashboard/addbook/addbook.component';
import {BookserviceService} from './studdashboard/bookservice.service';
import { ViewbookComponent } from './studdashboard/viewbook/viewbook.component';
import { ViewstudentComponent } from './studdashboard/viewstudent/viewstudent.component';
import { AddstudComponent } from './studdashboard/addstud/addstud.component';
import { IssubookComponent } from './studdashboard/issubook/issubook.component';
import { AllissuebookComponent } from './studdashboard/allissuebook/allissuebook.component';
import { EditbookComponent } from './studdashboard/editbook/editbook.component';
import { EditstudComponent } from './studdashboard/editstud/editstud.component';
import { ReturnbookComponent } from './studdashboard/returnbook/returnbook.component';
import { ReturnbooktableComponent } from './studdashboard/returnbooktable/returnbooktable.component';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { WelcomeadminComponent } from './adminportal/welcomeadmin/welcomeadmin.component';
import { SlidebaradminComponent } from './adminportal/slidebaradmin/slidebaradmin.component';
import { AddlibrarianComponent } from './adminportal/addlibrarian/addlibrarian.component';
import { ViewlibrarianComponent } from './adminportal/viewlibrarian/viewlibrarian.component';
import { LibrarianserviceService } from './adminportal/librarianservice.service';
// MDB Angular Free
import { InputsModule, InputUtilitiesModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { ShowbooktableComponent } from './adminportal/showbooktable/showbooktable.component';
import { ShowstudtableComponent } from './adminportal/showstudtable/showstudtable.component'
// For MDB Angular Free

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    StuddashboardComponent,
    WelcomeComponent,
    SlidebarComponent,
    AddbookComponent,
    ViewbookComponent,
    ViewstudentComponent,
    AddstudComponent,
    IssubookComponent,
    AllissuebookComponent,
    EditbookComponent,
    EditstudComponent,
    ReturnbookComponent,
    ReturnbooktableComponent,
    AdminportalComponent,
    WelcomeadminComponent,
    SlidebaradminComponent,
    AddlibrarianComponent,
    ViewlibrarianComponent,
    ShowbooktableComponent,
    ShowstudtableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,InputsModule, InputUtilitiesModule, WavesModule, ButtonsModule
  ],
  providers: [LibraryserviceService,BookserviceService,LibrarianserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
