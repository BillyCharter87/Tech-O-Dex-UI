import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


export const appRouter: Routes = [
  {
    path: '**',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(appRouter);
