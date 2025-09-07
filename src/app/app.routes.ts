import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'card-view'},
  {
    path: 'card-register',
    loadComponent: async () => {
      return import(
        './features/pages/card-register/card-register.component'
      ).then((m) => m.CardRegisterComponent);
    },
  },
  {
    path: 'card-view',
    title: 'view-card',
    loadComponent: async () => {
      return import('./features/pages/card-view/card-view.component').then(
        (m) => m.CardViewComponent
      );
    },
  },
];

export default routes;
