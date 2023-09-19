import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './interfaces/users.interfaces';
import { Album } from './interfaces/albums.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TablaService {

  constructor( private http: HttpClient ) { }

  public getUsuariosService() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  public getAlbumsService() {
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }


  // public getProveedoresService() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users');
  // }

}
