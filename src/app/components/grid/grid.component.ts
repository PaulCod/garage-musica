import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { BandData } from '../../types/bandData';
import { CommonModule } from '@angular/common';
import { dataFake } from '../../data/fakeData';

@Component({
  selector: 'app-grid',
  imports: [CardComponent, CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  bandsData: BandData[] = dataFake
}
