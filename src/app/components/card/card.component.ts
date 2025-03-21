import { Component, Input } from '@angular/core';
import { BandData } from '../../types/bandData';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() band: BandData = {id: 0, bandName: "", imagesUrl: [], musics: [], description: "" }
}
