import { Component } from '@angular/core';
import { AudioFileService } from './audio-file.service';

@Component({
  selector: 'app-audio-file',
  templateUrl: './audio-file.component.html',
  styleUrls: ['./audio-file.component.scss'],
})
export class AudioFileComponent {
  private audioFilePath = '../../../assets/audio.mp3';
  volume: number = 1.0;
  autoStart: boolean = true;
  // audioService: AudioFileService;

  /**
   *
   */
  constructor(private readonly audioService: AudioFileService) {}

  playAudio(): void {
    this.audioService.playAudio(this.audioFilePath, true);
  }

  pauseAudio(): void {
    this.audioService.pauseAudio();
  }

  stopAudio(): void {
    this.audioService.stopAudio();
  }

  setVolume(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.volume = parseFloat(input.value);
    this.audioService.setVolume(this.volume);
  }
}
