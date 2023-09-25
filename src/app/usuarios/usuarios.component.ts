import { Component, OnInit } from '@angular/core';
import { TablaService } from '../shared/tabla.service';
import { User } from '../shared/interfaces/users.interfaces';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public columnas: string[] = [];
  public informacion: User[] = [];

  constructor( private tablaService: TablaService ) {

  }

  async ngOnInit() {
    await this.getUsuariosPromise();
    this.showUsersTable();
  }

  async getUsuariosPromise(){
    console.log("Promesa Realizada");
    this.informacion = await this.tablaService.getUsuariosServicePromise();
  }

  showUsersTable() {
    //! Obtener las propiedades del objeto
    let columnasObjeto = Object.keys(this.informacion[0]);
    //! Utilizar el arreglo de propiedades en nuestra tabla
    this.columnas = columnasObjeto;
  }

}
