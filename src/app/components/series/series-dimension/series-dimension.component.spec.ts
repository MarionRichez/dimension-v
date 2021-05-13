import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesDimensionComponent } from './series-dimension.component';

describe('SeriesDimensionComponent', () => {
  let component: SeriesDimensionComponent;
  let fixture: ComponentFixture<SeriesDimensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesDimensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesDimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
