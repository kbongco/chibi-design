import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChbiButtonComponent } from './Components/chbi-button/chbi-button.component';
import {ChbiInputFieldsComponent} from './Components/chbi-input-fields/chbi-input-fields.component'

@NgModule({
  declarations: [
    AppComponent,
    ChbiButtonComponent,
    ChbiInputFieldsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
