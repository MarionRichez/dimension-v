import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterLastorderComponent } from './character-lastorder.component';

describe('CharacterLastorderComponent', () => {
  let component: CharacterLastorderComponent;
  let fixture: ComponentFixture<CharacterLastorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterLastorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterLastorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
