import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTreksComponent } from './featured-treks.component';

describe('FeaturedTreksComponent', () => {
  let component: FeaturedTreksComponent;
  let fixture: ComponentFixture<FeaturedTreksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedTreksComponent]
    });
    fixture = TestBed.createComponent(FeaturedTreksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
