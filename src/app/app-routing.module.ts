import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: 'pretraga',
  //   loadChildren: () => import('./pages/pretraga/pretraga.module').then( m => m.PretragaPageModule)
  // },
  {
    path: 'proizvodi',
    loadChildren: () => import('./pages/proizvodi/proizvodi.module').then( m => m.ProizvodiPageModule)
  },
  {
    path: 'kontakt',
    loadChildren: () => import('./pages/kontakt/kontakt.module').then( m => m.KontaktPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule)
  },
  // {
  //   path: 'korpa',
  //   loadChildren: () => import('./pages/korpa/korpa.module').then( m => m.KorpaPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  // {
  //   path: 'proizvod',
  //   loadChildren: () => import('./pages/proizvod/proizvod.module').then( m => m.ProizvodPageModule)
  // }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
