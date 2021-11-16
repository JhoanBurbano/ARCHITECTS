import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo:'404', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
