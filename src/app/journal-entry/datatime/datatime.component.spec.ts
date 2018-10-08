import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatimeComponent } from './datatime.component';

describe('DatatimeComponent', () => {
  let component: DatatimeComponent;
  let fixture: ComponentFixture<DatatimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
