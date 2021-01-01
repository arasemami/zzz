import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceTalentComponent } from './freelance-talent.component';

describe('FreelanceTalentComponent', () => {
  let component: FreelanceTalentComponent;
  let fixture: ComponentFixture<FreelanceTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelanceTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelanceTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
