import { Component } from '@angular/core';
import { Layout } from './core/Layout/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-layout />`,
  imports: [Layout],
})
export class AppComponent {}
