import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AlbumComponent } from './album/album.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'album',
    component: AlbumComponent
  },
  {
    path: 'personas',
    component: PersonasComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [],
})
export class AppRoutingModule { }
