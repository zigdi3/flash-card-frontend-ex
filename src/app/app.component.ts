import { Component } from '@angular/core';
import { Layout } from './core/Layout/layout';

@Component({
  selector: 'app-root',
  template: `<app-layout />`,
  standalone: true,
  imports: [Layout],
})
export class AppComponent {}
