import { Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { WoCdkComponent } from './wo-cdk/wo-cdk.component';
import { WithCdkComponent } from './with-cdk/with-cdk.component';
import { RepeateObsComponent } from './repeate-obs/repeate-obs.component';
import { DebounceComponent } from './debounce/debounce.component';


/*
{ title: 'w/o CDK Scroll', link: 'wo-cdk' },
    { title: 'w/ CDK Scroll', link: 'with-cdk' },
    { title: 'Debounce', link: 'debounce' },
    { title: 'Repeating observables', link: 'repeate-obs' },
    { title: 'Lazy', link: 'lazy' },
    { title: 'Lazy 2', link: 'lazy2' },
    { title: 'Lifecycle Event', link: 'event' },
*/
export const routes: Routes = [
    { path: 'event', component: EventComponent },
    { path: 'wo-cdk', component: WoCdkComponent },
    { path: 'with-cdk', component: WithCdkComponent },
    { path: 'repeate-obs', component: RepeateObsComponent },
    { path: 'debounce', component: DebounceComponent },
];
