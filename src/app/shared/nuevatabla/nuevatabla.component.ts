import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nuevatabla',
  templateUrl: './nuevatabla.component.html',
  styleUrls: ['./nuevatabla.component.css']
})
export class NuevatablaComponent {

  @Input()
  public columnas: string[] = [];

  @Input()
  public informacion: any[] = [];

}
