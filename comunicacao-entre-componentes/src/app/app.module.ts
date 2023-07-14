import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizadorComponent } from './visualizador/visualizador.component';
import { MensagemComponent } from './mensagem/mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizadorComponent,
    MensagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
