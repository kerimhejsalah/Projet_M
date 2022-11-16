import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { OffreDisponibleComponent } from './offre-disponible/offre-disponible.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
// addd
@NgModule({ 
  declarations: [
    AppComponent,
    MyAccountComponent,
    OffreDisponibleComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
