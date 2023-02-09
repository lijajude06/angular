import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { Shell } from '@app/shell/shell.service';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from '@app/auth/authentication.guard';

const routes: Routes = [
  Shell.childRoutes([
  { path: 'feature/about', component: AboutComponent, data: { title: marker('About') }, canActivate: [AuthenticationGuard] },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'feature/home', component: HomeComponent, data: { title: marker('Home') }, canActivate: [AuthenticationGuard]},]),
];

export class CustomersRoutingModule { }
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PrivateRoutingModule {}
