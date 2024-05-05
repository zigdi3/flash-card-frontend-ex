import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-audio-bg',
  templateUrl: './audio-bg.component.html',
  styleUrls: ['./audio-bg.component.css'],
})
export class AudioBgComponent implements OnInit {
  @Input() audioPath = '../../../assets/audio.mp3';
  volume = 0;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  @ViewChild('mute') btn!: ElementRef;
  audioSwitch() {
    this.volume = this.audioPlayer.nativeElement.volume;
this.audioPlayer.nativeElement.volume = 0;
  }

  constructor() {}

  ngOnInit() {
    this.audioPlayer.nativeElement.volume = 0.5;
  }

  increaseVolume() {
    if (this.audioPlayer.nativeElement.volume < 1) {
      this.audioPlayer.nativeElement.volume += 0.1;
    }
  }

  decreaseVolume() {
    if (this.audioPlayer.nativeElement.volume > 0) {
      this.audioPlayer.nativeElement.volume -= 0.1;
    }
  }
}
