import { Component } from '@angular/core';
import { TablaService } from '../tabla.service';
import { User } from '../interfaces/users.interfaces';

interface Proveedor {
  id: number,
  name: string
}

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})


export class TablaComponent {

  public listaVacia: User[] = [];
  public listaUsuario: User[] = [];

  constructor( private tablaService: TablaService ) { }

  getUsuarios(){
    console.log("Petición Realizada");

    this.tablaService
    .getUsuariosService()
    .subscribe((response) => {
      console.log(response);
      this.listaUsuario = response;
    })

  }

  showUsersTable() {
    this.listaVacia = this.listaUsuario;
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

  public columnas: string[] = ["ID-2", "Proveedor"];

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
