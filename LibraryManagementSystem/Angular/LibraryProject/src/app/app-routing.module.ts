import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { StuddashboardComponent } from './studdashboard/studdashboard.component';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { WelcomeComponent } from './studdashboard/welcome/welcome.component';
import { SlidebarComponent } from './studdashboard/slidebar/slidebar.component';
import { AddbookComponent } from './studdashboard/addbook/addbook.component';
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
import { AddlibrarianComponent } from './adminportal/addlibrarian/addlibrarian.component';
import { ViewlibrarianComponent } from './adminportal/viewlibrarian/viewlibrarian.component';
import { ShowbooktableComponent } from './adminportal/showbooktable/showbooktable.component';
import { ShowstudtableComponent } from './adminportal/showstudtable/showstudtable.component'
const routes: Routes = [
  
  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'adminprofile',component:AdminportalComponent,
  children:[
    {
      path:'welcome',
      component:WelcomeadminComponent
    }
    ,
    {
      path:'',
      component:WelcomeadminComponent
    }
    ,
    {
      path:'addbook',
      component:AddbookComponent
    },
    {
      path:'allbooktable',
      component:ShowbooktableComponent
    },
    {
      path:'allstudtable',
      component:ShowstudtableComponent
    },
    {
      path:'addstud',
      component:AddstudComponent
      
    }
    ,
    {
      path:'issuebook',
      component:IssubookComponent
    },
    {
      path:'allissue',
      component:AllissuebookComponent
    },{
      path:'editbook',
      component:EditbookComponent,
      pathMatch:'full'
    },
    {
      path:'editstud',
      component:EditstudComponent
    },
    {
      path:'returnbook',
      component:ReturnbookComponent
    },
    {
      path:'returnbooktable',
      component:ReturnbooktableComponent
    },
    {
      path:'addlibrarian',
      component:AddlibrarianComponent
    }
    ,
    {
      path:'viewlibrarian',
      component:ViewlibrarianComponent
    }
  ]}
  ,
  {path:"dashboard",component:StuddashboardComponent,
children:[
  {
    path:'welcome',
    component:WelcomeComponent
  }
  ,
  {
    path:'',
    component:WelcomeComponent
  },
  {
    path:'slidebar',
    component:SlidebarComponent 
  },
  {
    path:'addbook',
    component:AddbookComponent
  },
  {
    path:'allbook',
    component:ViewbookComponent
  },
  {
    path:'viewstud',
    component:ViewstudentComponent
  },
  {
    path:'addstud',
    component:AddstudComponent
    
  }
  ,
  {
    path:'issuebook',
    component:IssubookComponent
  },
  {
    path:'allissue',
    component:AllissuebookComponent
  },{
    path:'editbook',
    component:EditbookComponent,
    pathMatch:'full'
  },
  {
    path:'editstud',
    component:EditstudComponent
  },
  {
    path:'returnbook',
    component:ReturnbookComponent
  },
  {
    path:'returnbooktable',
    component:ReturnbooktableComponent
  }
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
