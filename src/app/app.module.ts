import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { ContadorModule } from './contador/contador.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AlbumsComponent } from './albums/albums.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PersonasComponent } from './personas/personas.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    UsuariosComponent,
    PersonasComponent
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
