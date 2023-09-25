import { Component } from '@angular/core';
import { TablaService } from './../shared/tabla.service';

interface Albums{
  id: number,
  nombre: string,
  edad: number
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  public columnas: string[] = ["nombre","id","edad"];
  public informacion: Albums[] = [];

  constructor( private tablaService: TablaService ) { }

 /* async ngOnInit() {
    await this.getUsuariosPromise();
    this.showUsersTable();
  }



  showAlbumsTable() {
    //! Obtener las propiedades del objeto
    let columnasObjeto = Object.keys(this.listaVacia[0]);
    //! Utilizar el arreglo de propiedades en nuestra tabla
    this.columnas = columnasObjeto;
  }
*/
}
