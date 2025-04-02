import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletesvgComponent } from './deletesvg.component';

describe('DeletesvgComponent', () => {
  let component: DeletesvgComponent;
  let fixture: ComponentFixture<DeletesvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletesvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletesvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
