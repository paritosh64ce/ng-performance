import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-performance';
  navItems = [
    // { title: 'Explore the Docs', link: 'https://angular.dev' },
    // { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
    // { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
    // { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
    { title: 'w/o CDK Scroll', link: 'wo-cdk' },
    { title: 'w/ CDK Scroll', link: 'with-cdk' },
    { title: 'Debounce', link: 'debounce' },
    { title: 'Repeating observables', link: 'repeate-obs' },
    { title: 'Lazy', link: 'lazy' },
    { title: 'Lazy 2', link: 'lazy2' },
    { title: 'Lifecycle Event', link: 'event' },
  ];
}
