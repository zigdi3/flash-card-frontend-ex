import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioFileService {
  private isBrowser: boolean;
  private audio?: HTMLAudioElement;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.audio = new Audio('assets/audio.mp3');
    }
  }

  play(): void {
    this.audio?.play();
  }

  pause(): void {
    this.audio?.pause();
  }

  stop(): void {
    if (!this.audio) return;
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  setVolume(volume: number): void {
    if (this.audio) {
      this.audio.volume = volume;
    }
  }

  seek(seconds: number): void {
    if (this.audio) {
      this.audio.currentTime = seconds;
    }
  }

  on(event: keyof HTMLMediaElementEventMap, callback: (e: Event) => void) {
    this.audio?.addEventListener(event, callback);
  }

  off(event: keyof HTMLMediaElementEventMap, callback: (e: Event) => void) {
    this.audio?.removeEventListener(event, callback);
  }

  get currentTime(): number {
    return this.audio?.currentTime ?? 0;
  }

  get duration(): number {
    return this.audio?.duration ?? 0;
  }

  get isPaused(): boolean {
    return this.audio?.paused ?? true;
  }
}