import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nueva-tabla',
  templateUrl: './nueva-tabla.component.html',
  styleUrls: ['./nueva-tabla.component.css']
})
export class NuevaTablaComponent {

  @Input() columnas: string[] = [];
  @Input() info: any[] = [];
}
