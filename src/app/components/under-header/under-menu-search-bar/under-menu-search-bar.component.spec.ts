import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderMenuSearchBarComponent } from './under-menu-search-bar.component';

describe('UnderMenuSearchBarComponent', () => {
  let component: UnderMenuSearchBarComponent;
  let fixture: ComponentFixture<UnderMenuSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderMenuSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderMenuSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
