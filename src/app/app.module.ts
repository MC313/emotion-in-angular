/* Angular Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/* Feature Modules */
import { JournalEntryModule } from './journal-entry/journal-entry.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JournalEntryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
