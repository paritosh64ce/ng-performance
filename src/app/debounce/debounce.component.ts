import { Component } from '@angular/core';
import { ModulesToImport } from '../app.config';
import { Subject, SubscriptionLike, debounceTime } from 'rxjs';

@Component({
  selector: 'app-debounce',
  imports: [...ModulesToImport],
  templateUrl: './debounce.component.html',
  styleUrl: './debounce.component.scss'
})
export class DebounceComponent {

  textValue = '';
  
  //#region Secret code
  myObservable: Subject<string>;
  subscription?: SubscriptionLike;

  constructor() {
    this.myObservable = new Subject<string>();
    this.subscription = undefined;
  }

  ngOnInit() {
    const delayTimeinMS = 1000;
    this.myObservable.pipe(
      debounceTime(delayTimeinMS),
    ).subscribe((x: string) => this.callServer(x));
  }

  ngOnDestroy() {
    this.myObservable.complete();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onChange($event: any) {
    this.myObservable.next($event);
  }

  //#endregion

  onChange1 ($event: any) {
    this.callServer($event);
  }

  callServer (searchText: string) {
    console.log(`%cMake server call with search text: ${searchText}`, 'color: red; font-weight: bold; font-family:sans-serif; font-size: 20px');
  }
}
