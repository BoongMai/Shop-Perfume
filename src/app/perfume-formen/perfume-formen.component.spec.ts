import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumeFormenComponent } from './perfume-formen.component';

describe('PerfumeFormenComponent', () => {
  let component: PerfumeFormenComponent;
  let fixture: ComponentFixture<PerfumeFormenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfumeFormenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfumeFormenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
