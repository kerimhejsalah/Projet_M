import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAccountComponent } from './my-account/my-account.component';
import { OffreDisponibleComponent } from './offre-disponible/offre-disponible.component';

const routes: Routes = [
{ path: '', redirectTo: '/', pathMatch: 'full' },
{ path: 'MyAccount', component: MyAccountComponent },
{ path: 'OffreDisponible', component: OffreDisponibleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
