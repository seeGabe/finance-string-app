import { Routes } from '@angular/router';
import { BiddingComponent } from './bidding/bidding.component';
import { ViewingComponent } from './viewing/viewing.component';

export const routes: Routes = [
  {
    path: 'bidding',
    component: BiddingComponent,
  },
  {
    path: 'viewing',
    component: ViewingComponent,
  },
];
