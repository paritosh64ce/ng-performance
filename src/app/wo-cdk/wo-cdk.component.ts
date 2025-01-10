import { Component } from '@angular/core';
import { UsualModules } from '../app.config';

@Component({
  selector: 'app-wo-cdk',
  imports: [...UsualModules],
  templateUrl: './wo-cdk.component.html',
  styleUrl: './wo-cdk.component.scss'
})
export class WoCdkComponent {

  length = 5000;
  items: string[] = [];

  constructor () {
    this.items = Array.from({length: this.length}).map((_, i) => `Item #${i}`);
  }

}
