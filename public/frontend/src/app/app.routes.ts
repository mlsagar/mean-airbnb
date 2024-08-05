import { Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { AirbnbsComponent } from './airbnbs/airbnbs.component';
import { AirbnbComponent } from './airbnb/airbnb.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "airbnbs",
        component: AirbnbsComponent
    },
    {
        path: "airbnb/:airbnbId",
        component: AirbnbComponent
    },
    {
        path: "**",
        component: ErrorPageComponent
    },
];
