import { Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { WoCdkComponent } from './wo-cdk/wo-cdk.component';
import { WithCdkComponent } from './with-cdk/with-cdk.component';
import { RepeateObsComponent } from './repeate-obs/repeate-obs.component';
import { DebounceComponent } from './debounce/debounce.component';


export const routes: Routes = [
    { path: 'event', component: EventComponent },
    { path: 'wo-cdk', component: WoCdkComponent },
    { path: 'with-cdk', component: WithCdkComponent },
    { path: 'repeate-obs', component: RepeateObsComponent },
    { path: 'debounce', component: DebounceComponent },
    { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
    { path: 'lazy2', loadChildren: () => import('./lazy2/lazy2.module').then(m => m.Lazy2Module) }
];
