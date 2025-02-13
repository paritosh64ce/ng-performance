import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-performance';
  navItems = [
    { title: 'Home', link: '' },
    { title: 'Caching', link: 'caching' },
    { title: 'w/o CDK Scroll', link: 'wo-cdk' },
    { title: 'w/ CDK Scroll', link: 'with-cdk' },
    { title: 'Debounce', link: 'debounce' },
    { title: 'Repeating observables', link: 'repeate-obs' },
    { title: 'Lazy', link: 'lazy' },
    { title: 'Lazy 2', link: 'lazy2' },
    { title: 'Lifecycle Event', link: 'event' },
    { title: 'Memory Leak', link: 'mem-leak' }
  ];
}
