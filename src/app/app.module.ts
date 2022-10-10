import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InOutComponent } from './components/in-out/in-out.component';
import { CompBComponent } from './components/comp-b/comp-b.component';

@NgModule({
  declarations: [AppComponent, InOutComponent, CompBComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
