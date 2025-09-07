import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BackgroundComponent } from './components/background/background.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, BackgroundComponent, RouterOutlet],
  template: `<app-header />
    <app-background />
    <main class="z-10">
      <router-outlet />
    </main>`,
})
export class Layout {}
