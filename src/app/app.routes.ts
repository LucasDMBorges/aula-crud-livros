import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'books',
      loadChildren: () =>
        import('./modules/books/book.module').then((m) => m.BookModule),
    },
    {
      path: 'dashboard',
      loadChildren: () =>
        import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    }
  ];