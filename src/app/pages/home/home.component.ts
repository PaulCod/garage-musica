import { Component } from '@angular/core';
import { GridComponent } from "../../components/grid/grid.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [GridComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
