import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/secure/dashboard/dashboard.component";
import { HomeComponent } from "./components/public/home/home.component";
import { LawyersComponent } from "./components/public/lawyers/lawyers.component";
import { PublicComponent } from "./components/public/public.component";
import { SecureComponent } from "./components/secure/secure.component";
import { RegisterComponent } from "./components/register/register.component";

const APP_ROUTES: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            { path: '', component: HomeComponent},
            { path: 'inicio', component: HomeComponent },
            // { path: 'ingresar', component: LoginComponent},
            { path: 'abogados', component: LawyersComponent },
        ]
    },
    {
        path: 'secure',
        component: SecureComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'dashboard', component: DashboardComponent},
        ]
    },
    {
        path: 'registrarse',
        component: RegisterComponent,
    },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);