import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-audio-bg',
  templateUrl: './audio-bg.component.html',
  styleUrls: ['./audio-bg.component.css'],
})
export class AudioBgComponent implements OnInit {
  @Input() audioPath = '../../../assets/audio1.mp3';
  isAudioEnabled = true;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;

  audioSwitch(val: boolean): string {
    let res = val ? 'on' : 'off';
    return res;
  }

  constructor() {}

  ngOnInit() {}

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
