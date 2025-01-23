import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioFileService {
  private audio = new Audio();

  playAudio(filePath: string, autoStart: boolean): void {
    this.audio.src = filePath;
    this.audio.load();
    if (autoStart) {
      this.audio.play();
    }
  }

  pauseAudio(): void {
    this.audio.pause();
  }

  stopAudio(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  setVolume(volume: number): void {
    this.audio.volume = volume;
  }
}
