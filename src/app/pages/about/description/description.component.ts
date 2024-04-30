import { Component } from '@angular/core';
import { roundstar_db } from 'src/app/core/db/roundstar.db';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
  items: any [] = roundstar_db;
}
