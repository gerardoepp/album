import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

const appRoutes: Routes =
  [
    {
      path: '',
      redirectTo: '/welcome',
      pathMatch: 'full'
    },
    {
      path: 'welcome',
      component: WelcomeComponent
    },
    {
      path: 'albums',
      component: AlbumsComponent
    },
    {
      path: 'album-detail/:name',
      component: AlbumDetailComponent
    },
    {
      path: '**',
      component: WelcomeComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);