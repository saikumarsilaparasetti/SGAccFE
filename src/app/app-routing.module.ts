import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { TestTableComponent } from './test-table/test-table.component';


const routes: Routes = [
  {path :'index', component:LoginComponent},
  {path:'',redirectTo:'/index',pathMatch:'full'},
  {path:'home',component:HomeComponent, canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent, canActivate:[AuthGuard]},
  {path:'test',component:TestTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
