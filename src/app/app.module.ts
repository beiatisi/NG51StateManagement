import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChangeCounterComponent } from './component/change-counter/change-counter.component';
import { ShowValueComponent } from './component/show-counter/show-counter.component';
import { ChangeCounterInterface } from './interface/change-counter.interface';
import { CounterService } from './service/counter/counter.service';
import { ShowCounterInterface } from './interface/show-counter.interface';

@NgModule({
  declarations: [
    AppComponent,
    ChangeCounterComponent,
    ShowValueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CounterService,
    {provide: ChangeCounterInterface, useExisting: CounterService},
    {provide: ShowCounterInterface, useExisting: CounterService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
