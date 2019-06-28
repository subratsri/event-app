import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListingComponent } from './event-listing/event-listing.component';

const routes: Routes = [
  { path: '', redirectTo: '/event-list', pathMatch: 'full' },
  { path: 'event-list', component: EventListingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
