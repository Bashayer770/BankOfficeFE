import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistsvgComponent } from './userlistsvg.component';

describe('UserlistsvgComponent', () => {
  let component: UserlistsvgComponent;
  let fixture: ComponentFixture<UserlistsvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserlistsvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserlistsvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
