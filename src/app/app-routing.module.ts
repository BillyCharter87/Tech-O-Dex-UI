import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {LoginComponent} from "./login/login.component";


export const appRouter: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

export const appRoutes: ModuleWithProviders = RouterModule.forChild(appRouter);
