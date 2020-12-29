import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestRatedPersonComponent } from './highest-rated-person.component';

describe('HighestRatedPersonComponent', () => {
  let component: HighestRatedPersonComponent;
  let fixture: ComponentFixture<HighestRatedPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighestRatedPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestRatedPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
