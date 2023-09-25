import { Component, OnInit } from '@angular/core';
import { TablaService } from '../shared/tabla.service';
import { User } from '../shared/interfaces/users.interfaces';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  //! Propiedades importantes
  public informacion: any[] = [];
  public columnas: string[] = ["ID-2", "Proveedor"];

  public listaUsuario: User[] = [];

  constructor( private tablaService: TablaService ) { }
  //! Función OnInit
  async ngOnInit() {
    //this.getUsuarios();
    await this.getUsuariosPromise();
    this.showUsersTable();
    console.log("Componente iniciado");
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

  showUsersTable() {
    this.informacion = this.listaUsuario;

    //! Obtener las propiedades del objeto
    let columnasObjeto = Object.keys(this.informacion[0]);
    console.log(columnasObjeto);

    //! Utilizar el arreglo de propiedades en nuestra tabla
    this.columnas = columnasObjeto;
  }

}
