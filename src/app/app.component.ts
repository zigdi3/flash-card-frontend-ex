import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { QRCodeModule } from 'angularx-qrcode';
import { MaterialModule } from './features/shared/material.module';
import { AudioFileComponent } from './pages/audio-file/audio-file.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
    imports: [
    RouterOutlet,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    QRCodeModule,
    YouTubePlayerModule,
     AudioFileComponent
  ],
})
export class AppComponent {
  title = 'flash-card-frontend';

  coffee() {
    window.open('https://ko-fi.com/kakarotto70', '_blank');
  }
}
