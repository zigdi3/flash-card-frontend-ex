import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { AudioFileService } from './audio-file.service';

@Component({
  selector: 'app-audio-file',
  imports: [],
  templateUrl: './audio-file.component.html',
})
export class AudioFileComponent implements OnInit, OnDestroy {
  isPlaying = false;
  currentTime = 0;
  duration = 0;
  volume = 1;
  audioService = inject(AudioFileService);
  isMute = this.audioService.isMute;

  private timeUpdateHandler = () => {
    this.currentTime = this.audioService.currentTime;
  };

  ngOnInit(): void {
    this.audioService.on('loadedmetadata', () => {
      this.duration = this.audioService.duration;
    });

    this.audioService.on('timeupdate', this.timeUpdateHandler);
  }

  ngOnDestroy(): void {
    this.audioService.off('timeupdate', this.timeUpdateHandler);
  }

  changeVolume(event: Event) {
    const input = event.target as HTMLInputElement;
    this.volume = +input.value;
    this.audioService.setVolume(this.volume);
  }

  togglePlay() {
    if (this.isPlaying) {
      this.audioService.pause();
    } else {
      this.audioService.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  seek(event: Event) {
    const input = event.target as HTMLInputElement;
    this.audioService.seek(+input.value);
  }

  toggleMute() {
    this.audioService.toggleMute(); // atualiza audio e volState no service
    this.volume = this.audioService.audio?.volume || 0; // sincroniza o slider
  }

  stop() {
    this.audioService.stop();
    this.isPlaying = false;
  }

  formatTime(sec: number): string {
    const m = Math.floor(sec / 60) || 0;
    const s = Math.floor(sec % 60) || 0;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }
}
