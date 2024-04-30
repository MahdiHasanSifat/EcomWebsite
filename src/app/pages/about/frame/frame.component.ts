import { Component } from '@angular/core';
import { frame_db } from 'src/app/core/db/framecard.db';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent {
  info: any [] = frame_db;
}
