import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent } from './sigup/sigup.component';
const routes: Routes = [
  {path: '/auth', redirectTo: '/sigin', pathMatch: 'full' },
  {path: 'sigin' , component: SiginComponent },
  {path: 'sigup' , component: SigupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
