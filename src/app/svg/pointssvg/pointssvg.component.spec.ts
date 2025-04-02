import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointssvgComponent } from './pointssvg.component';

describe('PointssvgComponent', () => {
  let component: PointssvgComponent;
  let fixture: ComponentFixture<PointssvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointssvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointssvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
