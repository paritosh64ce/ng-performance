import { Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { UsualModules } from '../app.config';

@Component({
  selector: 'app-with-cdk',
  imports: [...UsualModules, ScrollingModule],
  templateUrl: './with-cdk.component.html',
  styleUrl: './with-cdk.component.scss'
})
export class WithCdkComponent {

  length = 5000;
  items: string[] = [];

  constructor () {
    this.items = Array.from({length: this.length}).map((_, i) => `Item #${i}`);
  }

}
