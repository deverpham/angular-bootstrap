/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';

import { NotFound404Component } from './not-found404.component';

export const routes: Routes = [

  { path: 'lazy', loadChildren: './features/lazy/index#LazyModule' },
  { path: 'sync', loadChildren: './features/sync/index#SyncModule?sync=true' },
  { path: '**', component: NotFound404Component }
];
