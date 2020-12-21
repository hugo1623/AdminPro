import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
/** Modulo**/
import { PagesRoutingModule } from './pages/page.routing';

import { NotpagefoundComponent } from './notpagefound/notpagefound.component';


const routes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotpagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
  
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
