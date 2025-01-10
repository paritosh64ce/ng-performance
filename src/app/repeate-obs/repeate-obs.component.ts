import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RepeatChild1Component } from "../repeat-child1/repeat-child1.component";
import { RepeatChild2Component } from '../repeat-child2/repeat-child2.component';
import { UsualModules } from '../app.config';

@Component({
  selector: 'app-repeate-obs',
  imports: [
    ...UsualModules,
    RepeatChild1Component, RepeatChild2Component,
    MatTabsModule
  ],
  templateUrl: './repeate-obs.component.html',
  styleUrl: './repeate-obs.component.scss'
})
export class RepeateObsComponent {

  myTabs = [
    { label: 'Tab 0', index: 0}
  ];
  constructor() { }

  ngOnInit() {
  }

  addTab() {
    const index = this.myTabs.length;
    this.myTabs.push({ label: `Tab ${index}`, index: index });
  }

}