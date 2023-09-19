import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  public contador: number = 0;

  public showContador: boolean = true;

  @Input()
  public valorInicial: number = 0;

  //? Comunicación Padre a Hijo
  @Input()
  public aumento: number = 2;

  aumentarContadorPadre() {
    this.valorInicial = this.valorInicial + this.aumento;
  }

  //!

  public texto: string = "Aumentar Contador";


  aumentarContador( aumento: number ) {
    this.valorInicial+=aumento;
    // this.contador = this.contador + aumento;
  }

  disminuirContador() {
    this.valorInicial-=1;
  }

  eliminarContador() {
    this.showContador = false;
  }

  switchContador() {
    this.showContador = !this.showContador;
  }



}
