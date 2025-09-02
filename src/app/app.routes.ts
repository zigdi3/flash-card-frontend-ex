import { Routes } from '@angular/router';
import { CardRegisterComponent } from './pages/card-register/card-register.component';
import { CardViewComponent } from './pages/card-view/card-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'card-view', pathMatch: 'full' },
  {
    path: 'card-register',
    component: CardRegisterComponent,
  },
  {
    path: 'card-view',
    component: CardViewComponent,
  },
];
