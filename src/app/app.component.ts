import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'flash-card-frontend';

  coffee() {
    window.open('https://ko-fi.com/kakarotto70', '_blank');
  }
}
