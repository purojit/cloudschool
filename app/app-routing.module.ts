import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Route[] = [
{path:'', component:HomeComponent},
{path:'home', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'signUp', component:SignUpComponent},
{path:'**', component:ErrorPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
