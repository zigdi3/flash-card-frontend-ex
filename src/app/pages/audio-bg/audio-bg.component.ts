import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-audio-bg',
  templateUrl: './audio-bg.component.html',
  styleUrls: ['./audio-bg.component.css'],
})
export class AudioBgComponent implements OnInit, AfterViewInit {
  @Input() audioPath = '../../../assets/audio.mp3';
  volume = 50;
  isMuted = false;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  // private sanitizer = inject(DomSanitizer);
  @ViewChild('YTPlayer') iframe!: YouTubePlayer;
  trustedUrl: SafeUrl = '';
  playerConfig = {
    controls: 0,
    mute: 0,
    autoplay: 1,
    autoHide: 2,
    loop: 1,
  };
  constructor() {}

  onReady(e: any): void {
    console.log(e, 'its ready');
  }

  ngOnInit() {
    // this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    //   'https://www.youtube.com/watch?v=8Y7nTYGKlBA&t'
    // );

    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(scriptTag);
  }
  ngAfterViewInit(): void {
    if (this.iframe) {
      // this.volume = this.iframe.getVolume();
      this.iframe.setVolume(this.volume);
      this.iframe.seekTo(0, true);
      this.iframe.playVideo();
    }
  }

  audioSwitch() {
    // this.volume = this.audioPlayer.nativeElement.volume;
    // this.audioPlayer.nativeElement.volume = 0;

    if (this.iframe) {
      if (this.isMuted) this.iframe.mute();
      else this.iframe.unMute();
      this.isMuted = !this.isMuted;
    }
  }

  increaseVolume() {
    // if (this.audioPlayer.nativeElement.volume < 1) {
    //   this.audioPlayer.nativeElement.volume += 0.1;
    // }
    if (this.iframe) {
      this.volume = this.volume + 10;
      if (this.volume <= 100) this.iframe.setVolume(this.volume);
      else this.volume = 100;
    }
  }

  decreaseVolume() {
    // if (this.audioPlayer.nativeElement.volume > 0) {
    //   this.audioPlayer.nativeElement.volume -= 0.1;
    // }
    if (this.iframe) {
      this.volume = this.volume - 10;
      if (this.volume >= 0) this.iframe.setVolume(this.volume);
      else this.volume = 0;
    }
  }
}
