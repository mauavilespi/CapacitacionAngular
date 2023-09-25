import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { NuevaTablaComponent } from './nueva-tabla/nueva-tabla.component';



@NgModule({
  declarations: [TablaComponent, NuevaTablaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TablaComponent, NuevaTablaComponent
  ]
})
export class SharedModule { }
