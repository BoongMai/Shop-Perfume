import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumeForwomenComponent } from './perfume-forwomen.component';

describe('PerfumeForwomenComponent', () => {
  let component: PerfumeForwomenComponent;
  let fixture: ComponentFixture<PerfumeForwomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfumeForwomenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfumeForwomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
