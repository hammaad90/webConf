import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WebinarComponent} from './component/webinar/webinar.component'
import {HomeComponent} from './component/home/home.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'webinar', component: WebinarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
