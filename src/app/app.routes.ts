import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { HomeComponent } from './moduls/home/home.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' },
];
