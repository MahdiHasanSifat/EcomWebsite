import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-justcard',
  templateUrl: './justcard.component.html',
  styleUrls: ['./justcard.component.scss']
})
export class JustcardComponent {
  @Input() product: any = null;
  @Input() rates:any[] = [];
}
