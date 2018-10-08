import { JournalEntryModule } from './journal-entry.module';

describe('JournalEntryModule', () => {
  let journalEntryModule: JournalEntryModule;

  beforeEach(() => {
    journalEntryModule = new JournalEntryModule();
  });

  it('should create an instance', () => {
    expect(journalEntryModule).toBeTruthy();
  });
});
