import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';



@NgModule({
  declarations: [
    MeuComponenteComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    MeuComponenteComponent
  ]
})
export class MeuModuloModule { }
