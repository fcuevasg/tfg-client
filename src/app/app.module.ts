import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from './material-module/material-module.module';
import { PrimaryToolbarComponent } from './primary-toolbar/primary-toolbar.component';
import { LoginComponent } from './login/login.component';
//import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, PrimaryToolbarComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //MatButtonModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
