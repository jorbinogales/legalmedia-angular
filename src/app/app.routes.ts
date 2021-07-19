import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LawyersComponent } from "./components/lawyers/lawyers.component";

const APP_ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'abogados', component: LawyersComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);