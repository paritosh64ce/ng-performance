import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { rxjsPubSub } from '@pscoped/rxjs-pub-sub';

@Component({
  selector: 'app-repeat-child1',
  imports: [MatButtonModule],
  templateUrl: './repeat-child1.component.html'
})
export class RepeatChild1Component {

  @Input() index?: number;
  counter: number;

  constructor() {
    this.counter = 0;
  }

  ngOnInit() {
  }

  publishEvent () {
    this.counter++;
    rxjsPubSub.publishEvent(`COUNT_UPDATED`, this.counter);
  }

}
