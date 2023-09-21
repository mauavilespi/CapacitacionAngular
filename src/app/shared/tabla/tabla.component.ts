import { Component, OnInit } from '@angular/core';
import { TablaService } from '../tabla.service';
import { User } from '../interfaces/users.interfaces';
import { Album } from '../interfaces/albums.interfaces';

interface Proveedor {
  id: number,
  name: string
}

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})


export class TablaComponent implements OnInit {

  //! Propiedades importantes
  public listaVacia: any[] = [];
  public columnas: string[] = ["ID-2", "Proveedor"];

  public listaUsuario: User[] = [];
  public listaAlbum: Album[] = [];

  constructor( private tablaService: TablaService ) { }
  async ngOnInit() {
    console.log("Componente iniciado");
    //this.getUsuarios();
    //await this.getUsuariosPromise();
    //this.showUsersTable();
    await this.getAlbumsPromise();
    this.showAlbumsTable();
  }

  getUsuarios(){
    console.log("Petición Realizada");
    this.tablaService
    .getUsuariosService()
    .subscribe((response) => {
      console.log(response);
      this.listaUsuario = response;
    })
  }

  async getUsuariosPromise(){
    console.log("Promesa Realizada");
    this.listaUsuario = await this.tablaService.getUsuariosServicePromise();
  }

  getAlbums(){
    console.log("Petición Realizada");
    this.tablaService
    .getAlbumsService()
    .subscribe((response) => {
      console.log(response);
      this.listaAlbum = response;
    })
  }

  async getAlbumsPromise(){
    console.log("Promesa de Albumes Realizada");
    this.listaAlbum = await this.tablaService.getAlbumsServicePromise();
  }

  showUsersTable() {
    this.listaVacia = this.listaUsuario;

    //! Obtener las propiedades del objeto
    let columnasObjeto = Object.keys(this.listaVacia[0]);
    console.log(columnasObjeto);

    //! Utilizar el arreglo de propiedades en nuestra tabla
    this.columnas = columnasObjeto;
  }

  showAlbumsTable() {
    this.listaVacia = this.listaAlbum;

    //! Obtener las propiedades del objeto
    let columnasObjeto = Object.keys(this.listaVacia[0]);
    console.log(columnasObjeto);

    //! Utilizar el arreglo de propiedades en nuestra tabla
    this.columnas = columnasObjeto;
  }



  listaProovedores: any;

  getProovedores() {
    // this.tablaService.getProveedoresService().subscribe((response) => {
    //   this.listaProovedores = response
    //   console.log(response);
    // })
  }



  consoleInfo() {
    this.proveedores = this.listaProovedores;
    console.log(this.listaProovedores);
  }


  public elementos: string[] = ["A", "B", "C", "D"];

  public primerProveedor: Proveedor = {
    id: 0,
    name: "DELL"
  };

  public proveedores: any[] = [
    this.primerProveedor,
    this.primerProveedor,
    this.primerProveedor,
    this.primerProveedor,
    this.primerProveedor
  ];



}
