/* Angular Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/* Feature Components */
import { JournalEntryComponent } from './journal-entry.component';
import { MuscleGroupComponent } from './muscle-group/muscle-group.component';
import { DatatimeComponent } from './datatime/datatime.component';
import { RatingComponent } from './rating/rating.component';
import { NotesComponent } from './notes/notes.component';

import { EntryStepDirective } from './entry-step.directive';

@NgModule({
  declarations: [
    JournalEntryComponent,
    MuscleGroupComponent,
    DatatimeComponent,
    RatingComponent,
    NotesComponent,
    EntryStepDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    JournalEntryComponent
  ]
})
export class JournalEntryModule { }
