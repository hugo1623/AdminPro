import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/** Modulo**/
import { PagesRoutingModule } from './pages/page.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

const routes: Routes = [

  // path: '/Dashboard' PagesRouting
  // path: '/Auth' AuthRouting
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotpagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
    
  
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
