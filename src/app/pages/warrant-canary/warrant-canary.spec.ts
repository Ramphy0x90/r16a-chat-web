import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantCanary } from './warrant-canary';

describe('WarrantCanary', () => {
  let component: WarrantCanary;
  let fixture: ComponentFixture<WarrantCanary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarrantCanary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarrantCanary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
