import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { rxjsPubSub } from '@pscoped/rxjs-pub-sub';
import { ModulesToImport } from '../app.config';

@Component({
  selector: 'app-repeat-child2',
  imports: [...ModulesToImport],
  templateUrl: './repeat-child2.component.html'
})
export class RepeatChild2Component {

  @Input() index?: number;
  counter?: number;
  private subscription?: Subscription;
  constructor() { }

  ngOnInit() {
    rxjsPubSub.subscribe(`COUNT_UPDATED`, data => {
      this.counter = data;
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
