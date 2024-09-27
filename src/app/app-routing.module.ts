import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardRegisterComponent } from './pages/card-register/card-register.component';
import { CardViewComponent } from './pages/card-view/card-view.component';

export const routes: Routes = [

  { path: '', redirectTo: 'card-view', pathMatch: 'full' },
  {
    path: 'card-register', component: CardRegisterComponent
  },
  {
    path: 'card-view', component: CardViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
