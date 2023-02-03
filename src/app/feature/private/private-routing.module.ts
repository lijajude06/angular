import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from '../../@shared/auth-guard/auth.guard';

const routes: Routes = [
   
  Shell.childRoutes([
  { path: 'about', component: AboutComponent, data: { title: marker('About') },canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: marker('Home') }}]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PrivateRoutingModule {}
