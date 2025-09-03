import { Component } from '@angular/core';
import { AudioFileComponent } from '@app/core/Layout/components/audio-file/audio-file.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [AudioFileComponent, RouterOutlet],
  templateUrl: './layout.html',
  styles: [
    `
      .audio-container {
        position: sticky;
        inset: 0px;
        z-index: 1000;
        display: flex;
        background: rgba(0, 0, 130, 0.5);
      }

      .text-running {
        display: inline-block;
        position: relative;
        white-space: nowrap;
        animation: moveText 12s linear infinite;
      }

      .text-styled:hover {
        color: gold;
        cursor: pointer;
      }
      @keyframes moveText {
        0% {
          transform: translateX(100%);
        }

        100% {
          transform: translateX(-75%);
        }
      }
    `,
  ],
})
export class Layout {
  title = 'flash-card-frontend';

  coffee() {
    window.open('https://ko-fi.com/kakarotto70', '_blank');
  }
}
