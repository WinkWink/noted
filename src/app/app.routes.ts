import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupUpPageComponent } from './components/signup-up-page/signup-up-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupUpPageComponent },
  // will eventually use authgaurd for these
  { path: 'noted', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
];
