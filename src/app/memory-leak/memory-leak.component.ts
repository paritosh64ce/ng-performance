import { Component, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-memory-leak',
  imports: [MatButtonModule],
  templateUrl: './memory-leak.component.html'
})
export class MemoryLeakComponent implements OnDestroy {

  myObservable: Subscription | undefined;
  
  subscribeDocClick () {
    this.myObservable = fromEvent(document, 'click').subscribe((event: Event) => {
      alert(`Mouse click at: (${(event as MouseEvent).clientX}, ${(event as MouseEvent).clientY})`);
    });
  }
  
  ngOnDestroy() {
    // this.myObservable?.unsubscribe();
  }

}
