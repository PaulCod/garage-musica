import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/fakeData';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-music',
  imports: [],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent implements OnInit {

  musicId: string = ""
  musicLyric: string = ""
  musicName: string = ""
  safeUrl: SafeResourceUrl = "";

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      let id = value.get("id")

      if(id != null) {
        this.musicId = id;
      }
    })

    this.getData()
  }

  getData() {
    let music = dataFake.flatMap(band => band.musics).find(music => music.videoId == this.musicId);
    if(music != undefined) {
      this.musicLyric = music.lyric
      this.musicName = music.musicName
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.musicId}`)
    }

  }
}
