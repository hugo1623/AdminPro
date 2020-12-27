import { NgModule } from "@angular/core";
import {Routes,RouterModule } from "@angular/router";
import { PagesRoutingModule } from "../pages/page.routing";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes =[

    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
];



@NgModule({
    imports: [
        RouterModule.forChild(routes),
        PagesRoutingModule

    ],
    exports: [RouterModule
    
    ],

})
export class AuthRoutingModule{}