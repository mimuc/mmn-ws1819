import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemeMUCComponent } from './components/mememuc/mememuc.component';
import { MemeMUCHistoryComponent} from "./components/mememuc/mememuc.history.component";

@NgModule({
  declarations: [
    AppComponent,
    MemeMUCComponent,
    MemeMUCHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
