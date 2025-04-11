import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { BookComponent } from './modules/books/book.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'books',
        component: BookComponent
    }
];
