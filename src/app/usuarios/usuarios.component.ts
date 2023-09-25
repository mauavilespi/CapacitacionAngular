import { Component, OnInit } from '@angular/core';
import { TablaService } from '../shared/tabla.service';
import { User } from '../shared/interfaces/users.interfaces';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{
 //! Propiedades importantes
 public columnas: any[] = [];

 public informacion: User[] = [];


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
     this.informacion = response;
   })

 }

 async getUsuariosPromise(){
   console.log("Promesa Realizada");

   this.informacion = await this.tablaService.getUsuariosServicePromise();

 }


 showUsersTable() {
   this.columnas = this.informacion;

   //! Obtener las propiedades del objeto
   let columnasObjeto = Object.keys(this.columnas[0]);
   console.log(columnasObjeto);

   //! Utilizar el arreglo de propiedades en nuestra tabla
   this.columnas = columnasObjeto;
 }


}
