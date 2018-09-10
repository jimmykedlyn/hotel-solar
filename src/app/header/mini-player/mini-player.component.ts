import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'hs-mini-player',
  templateUrl: './mini-player.component.html',
  styleUrls: ['./mini-player.component.scss']
})
export class MiniPlayerComponent implements OnInit {
  @ViewChild('musicas') musicas: any;
  isPlaying: Boolean = true;
  constructor() { }
  startStopPlaying (event: any) {
    if (this.isPlaying) {
      this.musicas.nativeElement.play();
    } else {
      this.musicas.nativeElement.pause();
    }
    this.isPlaying = !this.isPlaying;
  }
  ngOnInit() {
  }

}
