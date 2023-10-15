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
  {
    path: 'paginalogin-usuario',
    loadChildren: () => import('./pages/paginalogin-usuario/paginalogin-usuario.module').then( m => m.PaginaloginUsuarioPageModule)
  },
 
  {
    path: 'menuprincipal',
    loadChildren: () => import('./pages/menuprincipal/menuprincipal.module').then( m => m.MenuprincipalPageModule)
  },

  {
    path: 'tomarviaje',
    loadChildren: () => import('./pages/tomarviaje/tomarviaje.module').then( m => m.TomarviajePageModule)
  },
  {
    path: 'comenzarviaje',
    loadChildren: () => import('./pages/comenzarviaje/comenzarviaje.module').then( m => m.ComenzarviajePageModule)
  },
  {
    path: 'sesionconductor',
    loadChildren: () => import('./pages/sesionconductor/sesionconductor.module').then( m => m.SesionconductorPageModule)
  },
  {
    path: 'menuprincipalconductor',
    loadChildren: () => import('./pages/menuprincipalconductor/menuprincipalconductor.module').then( m => m.MenuprincipalconductorPageModule)
  },
  {
    path: 'perfilusuario',
    loadChildren: () => import('./pages/perfilusuario/perfilusuario.module').then( m => m.PerfilusuarioPageModule)
  },
  
  {
    path: 'servicioconductores',
    loadChildren: () => import('./pages/servicioconductores/servicioconductores.module').then( m => m.ServicioconductoresPageModule)
  },
  {
    path: 'rutaconductor',
    loadChildren: () => import('./pages/rutaconductor/rutaconductor.module').then( m => m.RutaconductorPageModule)
  },
  {
    path: 'mapaconductores',
    loadChildren: () => import('./pages/mapaconductores/mapaconductores.module').then( m => m.MapaconductoresPageModule)
  },

  {
    path: 'mapaclientes',
    loadChildren: () => import('./pages/mapaclientes/mapaclientes.module').then( m => m.MapaclientesPageModule)
  },
  
  {
    path: 'editarperfilusuario',
    loadChildren: () => import('./pages/editarperfilusuario/editarperfilusuario.module').then( m => m.EditarperfilusuarioPageModule)
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