import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChbiButtonComponent } from './Components/chbi-button/chbi-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ChbiButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
