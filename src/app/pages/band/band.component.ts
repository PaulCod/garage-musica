import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Music } from '../../types/bandData';
import { dataFake } from '../../data/fakeData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-band',
  imports: [CommonModule, RouterModule],
  templateUrl: './band.component.html',
  styleUrl: './band.component.css'
})
export class BandComponent implements OnInit {

  imgUrl: string = ""
  bandName: string = ""
  musicsList: Music[] = []
  description: string = ''

  private id: number = 0

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      let idStr = value.get("id")

      if(idStr != null) {
        this.id = Number.parseInt(idStr)
      }
    })
    this.setData()
  }

  setData() {
    let bandData = dataFake.filter(band => band.id == this.id)[0];

    this.imgUrl = bandData.imagesUrl[0]
    this.bandName = bandData.bandName;
    this.musicsList = bandData.musics
    this.description = bandData.description
  }
}
