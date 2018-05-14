import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {routing} from './app.routing'
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './user.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  NoopAnimationPlayer
} from '@angular/animations';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    WelcomeComponent,
    AlbumDetailComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    routing,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
