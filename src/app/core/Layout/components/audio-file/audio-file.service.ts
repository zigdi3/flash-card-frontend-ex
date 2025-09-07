import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioFileService {
  private isBrowser: boolean;
  audio?: HTMLAudioElement;
  isMute = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      this.audio = new Audio('assets/audio.mp3');
    }
  }

  volState = 0;

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
      if (this.isMute() && this.audio.volume > 0) {
        this.isMute.set(false);
      }
      this.audio.volume = volume;
    }
  }



  toggleMute() {
    if (!this.audio) return;

    if (this.isMute()) {
      this.audio.volume = this.volState;
      this.isMute.set(false);
    } else {
      this.volState = this.audio.volume;
      this.audio.volume = 0;
      this.isMute.set(true);
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
