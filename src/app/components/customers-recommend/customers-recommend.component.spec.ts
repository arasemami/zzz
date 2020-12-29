import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersRecommendComponent } from './customers-recommend.component';

describe('CustomersRecommendComponent', () => {
  let component: CustomersRecommendComponent;
  let fixture: ComponentFixture<CustomersRecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersRecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
