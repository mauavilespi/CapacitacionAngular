import { Component } from '@angular/core';
interface Persona{
  id: number;
  nombre: string;
  edad: number;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  public columnas: string[] = ["id", "nombre", "edad"];
  public informacion: Persona[] = [
    {
      id: 0,
      nombre: "Mau",
      edad: 24
    },
    {
      id: 1,
      nombre: "Pedro",
      edad: 20
    },
    {
      id: 2,
      nombre: "Julio",
      edad: 30
    },
  ]
}
