import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'flash-card-frontend';

  coffee() {
    window.location.href = 'https://ko-fi.com/kakarotto70';
  }
}
