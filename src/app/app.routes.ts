import { Routes } from '@angular/router';
import { LoginComponent} from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent} from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { ClientsComponent } from './pages/clients/clients.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: 'orders', component: OrdersComponent, canActivate: [authGuard]},
  {path: 'products', component: ProductsComponent, canActivate: [authGuard]},
  {path: 'clients', component: ClientsComponent, canActivate: [authGuard]},
  {path: '**', redirectTo: 'login'}
];
