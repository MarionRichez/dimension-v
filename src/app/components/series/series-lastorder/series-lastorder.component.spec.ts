import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesLastorderComponent } from './series-lastorder.component';

describe('SeriesLastorderComponent', () => {
  let component: SeriesLastorderComponent;
  let fixture: ComponentFixture<SeriesLastorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesLastorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesLastorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
