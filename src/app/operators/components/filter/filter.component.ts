import {Component, OnInit} from '@angular/core';
import {Highlight} from 'ngx-highlightjs';

@Component({
  selector: 'app-filter',
  imports: [Highlight],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit {
  code: string = `
    import { of } from 'rxjs';
    import { filter } from 'rxjs/operators';

    const numbers$ = of(1, 2, 3, 4, 5);
    numbers$
      .pipe(filter(num => num % 2 === 0))
      .subscribe({
        next: data => console.log(data), // Output: 2, 4
      });
    `;

  ngOnInit(): void {
    // Todo: refactorizar este código usando el operador Filter:

  }
}
