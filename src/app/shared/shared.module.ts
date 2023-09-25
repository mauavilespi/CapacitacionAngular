import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { NuevatablaComponent } from './nuevatabla/nuevatabla.component';



@NgModule({
  declarations: [TablaComponent, NuevatablaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TablaComponent,
    NuevatablaComponent
  ]
})
export class SharedModule { }
