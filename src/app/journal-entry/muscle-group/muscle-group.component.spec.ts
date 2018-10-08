import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleGroupComponent } from './muscle-group.component';

describe('MuscleGroupComponent', () => {
  let component: MuscleGroupComponent;
  let fixture: ComponentFixture<MuscleGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuscleGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuscleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
