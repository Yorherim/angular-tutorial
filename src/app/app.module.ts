import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InOutComponent } from './components/in-out/in-out.component';
import { CompBComponent } from './components/comp-b/comp-b.component';
import { TodosComponent } from './components/todos/todos.component';
import { ChangeableTitleComponent } from './components/changeable-title/changeable-title.component';

@NgModule({
  declarations: [
    AppComponent,
    InOutComponent,
    CompBComponent,
    TodosComponent,
    ChangeableTitleComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
