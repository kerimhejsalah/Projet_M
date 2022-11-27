import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MatdialogauthComponent } from './matdialogauth/matdialogauth.component';
import { ProfilcondidatComponent } from './profilcondidat/profilcondidat.component';
import { ProfilentepriseComponent } from './profilenteprise/profilenteprise.component';

const routes: Routes = [
{ path: '', redirectTo: '/auth', pathMatch: 'full' },
{path: 'auth', component: AuthComponent},
{path: 'candidat', component: ProfilcondidatComponent},
{path: 'entreprise', component: ProfilentepriseComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
