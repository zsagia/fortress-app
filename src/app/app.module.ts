import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MockFortressService } from './mock/service/mock.fortress.service';
import { FortressComponent } from './fortress/fortress.component';
import { MainViewComponent } from './main/main.component';
import { DetailedViewComponent } from './detailed/detailed.component';

@NgModule({
  declarations: [
    AppComponent,
    FortressComponent,
    MainViewComponent,
    DetailedViewComponent
  ],
  exports: [FortressComponent, MainViewComponent, DetailedViewComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ MockFortressService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
