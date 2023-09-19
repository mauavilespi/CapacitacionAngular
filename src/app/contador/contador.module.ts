import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';

import { ContadorComponent } from './contador.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ContadorComponent],
  imports: [
    CommonModule,
    MaterialModule],
  exports: [ContadorComponent],
})
export class ContadorModule { }
