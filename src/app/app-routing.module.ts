import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', redirectTo: '/auth', pathMatch: 'full' },
{path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
{path:'layouts',loadChildren:()=>import('./layouts/layouts.module').then(m=>m.LayoutsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
