import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekCategoriesComponent } from './trek-categories.component';

describe('TrekCategoriesComponent', () => {
  let component: TrekCategoriesComponent;
  let fixture: ComponentFixture<TrekCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrekCategoriesComponent]
    });
    fixture = TestBed.createComponent(TrekCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
