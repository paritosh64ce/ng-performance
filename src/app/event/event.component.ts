import { Component, DoCheck } from '@angular/core';
import { UsualModules } from '../app.config';

@Component({
  selector: 'app-event',
  imports: [...UsualModules],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
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
