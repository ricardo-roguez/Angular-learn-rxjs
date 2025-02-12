import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {Highlight} from 'ngx-highlightjs';
import {HighlightLineNumbers} from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    Highlight,
    HighlightLineNumbers
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  code: string = `
    const clicks = fromEvent(document, 'click');
    const positions = clicks.pipe(map(ev => ev.clientX));
    positions.subscribe(x => console.log(x));
    `;

}
