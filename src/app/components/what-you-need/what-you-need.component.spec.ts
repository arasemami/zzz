import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatYouNeedComponent } from './what-you-need.component';

describe('WhatYouNeedComponent', () => {
  let component: WhatYouNeedComponent;
  let fixture: ComponentFixture<WhatYouNeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatYouNeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatYouNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
