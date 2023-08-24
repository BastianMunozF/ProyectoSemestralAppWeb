import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'paginaregistrar-usuario',
    loadChildren: () => import('./pages/paginaregistrar-usuario/paginaregistrar-usuario.module').then( m => m.PaginaregistrarUsuarioPageModule)
  },
  {
    path: 'paginarecuperar-usuario',
    loadChildren: () => import('./pages/paginarecuperar-usuario/paginarecuperar-usuario.module').then( m => m.PaginarecuperarUsuarioPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
