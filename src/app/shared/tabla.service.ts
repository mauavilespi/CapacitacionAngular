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

  public getUsuariosServicePromise() : Promise<any> {
    return new Promise( (resolve, reject) => {
      this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe((response) => {
        resolve(response);
      });
    })
  }

  public getAlbumsServicePromise() : Promise<any> {
    return new Promise( (resolve, reject) => {
      this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums').subscribe((response) => {
        resolve(response);
      });
    })
  }

  // public getProveedoresService() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users');
  // }

}
