import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowIsWorkingComponent } from './how-is-working.component';

describe('HowIsWorkingComponent', () => {
  let component: HowIsWorkingComponent;
  let fixture: ComponentFixture<HowIsWorkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowIsWorkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowIsWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
