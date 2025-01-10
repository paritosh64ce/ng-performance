import { Component, Input } from '@angular/core';
import { rxjsPubSub } from '@pscoped/rxjs-pub-sub';

@Component({
  selector: 'app-repeat-child1',
  imports: [],
  templateUrl: './repeat-child1.component.html',
  styleUrl: './repeat-child1.component.scss'
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
    rxjsPubSub.publishEvent(`COUNT_UPDATED_${this.index}`, this.counter);
  }

}
