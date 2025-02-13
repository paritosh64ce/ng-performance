import { Component, DoCheck } from '@angular/core';
import { ModulesToImport } from '../app.config';

@Component({
  selector: 'app-event',
  imports: [...ModulesToImport],
  templateUrl: './event.component.html'
})
export class EventComponent implements DoCheck {
  myText: string = '';
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }
  clickMe() {}

  get runChangeDetection() {
    console.log('TodoComponent - Checking the view');
    return true;
  }
}
