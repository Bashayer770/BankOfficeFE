import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusersvgComponent } from './addusersvg.component';

describe('AddusersvgComponent', () => {
  let component: AddusersvgComponent;
  let fixture: ComponentFixture<AddusersvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddusersvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddusersvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
