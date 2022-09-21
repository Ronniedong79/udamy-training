import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingRecipeComponentComponent } from './testing-recipe-component.component';

describe('TestingRecipeComponentComponent', () => {
  let component: TestingRecipeComponentComponent;
  let fixture: ComponentFixture<TestingRecipeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingRecipeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingRecipeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
