import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { ContadorModule } from './contador/contador.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PersonasComponent } from './personas/personas.component';
import { AlbumsComponent } from './albums/albums.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    AlbumsComponent,
    UsuariosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ContadorModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
