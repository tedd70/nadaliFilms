import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'acasa',
    loadChildren: () => import('./home/components/home.module').then(m => m.HomeModule),
    // canLoad: [ AuthGuard ]
  },
  {
    path: 'galerie',
    loadChildren: () => import('./galery/components/galery.module').then(m => m.GaleryModule),
    // canLoad: [ AuthGuard ]
  },
  {
    path: 'servicii',
    loadChildren: () => import('./our-services/components/our-services.module').then(m => m.OurServicesModule),
    // canLoad: [ AuthGuard ]
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/components/contact.module').then(m => m.ContactModule),
    // canLoad: [ AuthGuard ]
  },
  { path: '', redirectTo: 'acasa', pathMatch: 'full' },
  { path: '**', redirectTo: 'acasa' }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}