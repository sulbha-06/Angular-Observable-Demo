import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceiverComponentComponent } from './receiver-component/receiver-component.component';
import { FormsModule } from '@angular/forms';
import { ExcelDemoComponent } from './components/excel-demo/excel-demo.component';
@NgModule({
  declarations: [
    AppComponent,
    ReceiverComponentComponent,
    ExcelDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
