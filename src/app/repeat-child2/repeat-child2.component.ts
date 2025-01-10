import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { rxjsPubSub } from '@pscoped/rxjs-pub-sub';
import { UsualModules } from '../app.config';

@Component({
  selector: 'app-repeat-child2',
  imports: [...UsualModules],
  templateUrl: './repeat-child2.component.html',
  styleUrl: './repeat-child2.component.scss'
})
export class RepeatChild2Component {

  @Input() index?: number;
  counter?: number;
  private subscription?: Subscription;
  constructor() { }

  ngOnInit() {
    rxjsPubSub.subscribe(`COUNT_UPDATED_${this.index}`, data => {
      this.counter = data;
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
