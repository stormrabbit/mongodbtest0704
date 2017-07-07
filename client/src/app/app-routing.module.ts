import {
  NgModule
} from '@angular/core';
import { RouterModule, Route }   from '@angular/router';
import { GundamDetailComponent } from './component/detail/gundam-detail.component';
import { PlayerDemoComponent } from './component/demo/demo';
import { PlayerSelectedComponent } from './component/demo/demo-select.component';

import { PlayerHostComponent } from './component/host/player-host-component';

const routes: Route[] = [
    {
      path: '',
      component: PlayerHostComponent
    },
    {
      path: 'detail/:id',
      component: GundamDetailComponent
    },
    {
      path: 'demo',
      component: PlayerDemoComponent
    },
    {
      path: 'selected/:id',
      component: PlayerSelectedComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  })

export class AppRoutingModule {

}
