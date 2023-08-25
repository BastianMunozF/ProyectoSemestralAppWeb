import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'paginalogin-usuario',
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
//  {
//    path: '**',
//    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
//  }, 
  {
    path: 'paginalogin-usuario',
    loadChildren: () => import('./pages/paginalogin-usuario/paginalogin-usuario.module').then( m => m.PaginaloginUsuarioPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }