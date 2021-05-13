import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDimensionComponent } from './character-dimension.component';

describe('CharacterDimensionComponent', () => {
  let component: CharacterDimensionComponent;
  let fixture: ComponentFixture<CharacterDimensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterDimensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
