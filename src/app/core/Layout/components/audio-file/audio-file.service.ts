import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioFileService {
  private isBrowser: boolean;
  private audio;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.audio = new Audio();
    }
  }

  playAudio(filePath: string, autoStart: boolean): void {
    if (!this.audio) return;
    this.audio.src = filePath;
    this.audio.load();
    if (autoStart) {
      this.audio.play();
    }
  }

  pauseAudio(): void {
    if (!this.audio) return;
    this.audio.pause();
  }

  stopAudio(): void {
    if (!this.audio) return;
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  setVolume(volume: number): void {
    if (!this.audio) return;
    console.log(volume)
    this.audio.volume = volume;
  }
}
