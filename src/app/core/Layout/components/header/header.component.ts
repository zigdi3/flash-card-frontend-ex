import { Component } from '@angular/core';
import { AudioFileComponent } from '../audio-file/audio-file.component';

@Component({
  selector: 'app-header',
  imports: [AudioFileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  coffee() {
    window.open('https://ko-fi.com/kakarotto70', '_blank');
  }
}
