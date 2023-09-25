import { TablaService } from './../shared/tabla.service';
import { Component } from '@angular/core';
import { User } from '../shared/interfaces/users.interfaces';

interface Usuarios{
  id: number,
  nombre: string,
  edad: number
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent {
  public columnas: string[] = [];
  public informacion: User[] = []
  public listaVacia: any[] = [];
  public listaUsuario: User[] = [];

  constructor( private tablaService: TablaService ) { }

  async ngOnInit() {
    await this.getUsuariosPromise();
    this.showUsersTable();
  }

  async getUsuariosPromise(){
    this.informacion = await this.tablaService.getUsuariosServicePromise();
  }

  showUsersTable() {
    //! Obtener las propiedades del objeto
    let columnasObjeto = Object.keys(this.informacion[0]);
    //! Utilizar el arreglo de propiedades en nuestra tabla
    this.columnas = columnasObjeto;
  }
}
