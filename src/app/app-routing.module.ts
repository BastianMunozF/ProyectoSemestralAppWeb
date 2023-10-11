import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'paginalogin-usuario',
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
    path: 'vistaperfil',
    loadChildren: () => import('./pages/vistaperfil/vistaperfil.module').then( m => m.VistaperfilPageModule)
  },
  {
    path: 'menuprincipal',
    loadChildren: () => import('./pages/menuprincipal/menuprincipal.module').then( m => m.MenuprincipalPageModule)
  },
  {
    path: 'miubicacion',
    loadChildren: () => import('./pages/miubicacion/miubicacion.module').then( m => m.MiubicacionPageModule)
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
    path: '',
    loadChildren: () => import('./pages/paginaprincipal/paginaprincipal.module').then( m => m.PaginaprincipalPageModule)
  },
  {
    path: 'menuprincipalconductor',
    loadChildren: () => import('./pages/menuprincipalconductor/menuprincipalconductor.module').then( m => m.MenuprincipalconductorPageModule)
  },
  {
    path: 'registrarconductor',
    loadChildren: () => import('./pages/registrarconductor/registrarconductor.module').then( m => m.RegistrarconductorPageModule)
  },
  {
    path: 'perfilusuario',
    loadChildren: () => import('./pages/perfilusuario/perfilusuario.module').then( m => m.PerfilusuarioPageModule)
  },
  
  {
    path: 'vistadminusuario',
    loadChildren: () => import('./pages/vistadminusuario/vistadminusuario.module').then( m => m.VistadminusuarioPageModule)
  },
  {
    path: 'perfilconductor',
    loadChildren: () => import('./pages/perfilconductor/perfilconductor.module').then( m => m.PerfilconductorPageModule)
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
    path: 'adminprincipal',
    loadChildren: () => import('./pages/adminprincipal/adminprincipal.module').then( m => m.AdminprincipalPageModule)
  },
  {
    path: 'mapaconductores',
    loadChildren: () => import('./pages/mapaconductores/mapaconductores.module').then( m => m.MapaconductoresPageModule)
  },
  
  {
    path: 'inicioadmin',
    loadChildren: () => import('./pages/inicioadmin/inicioadmin.module').then( m => m.InicioadminPageModule)
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
    path: 'editarperfilconductor',
    loadChildren: () => import('./pages/editarperfilconductor/editarperfilconductor.module').then( m => m.EditarperfilconductorPageModule)
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