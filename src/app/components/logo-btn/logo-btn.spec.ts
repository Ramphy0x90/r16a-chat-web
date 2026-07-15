import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoBtn } from './logo-btn';

describe('LogoBtn', () => {
  let component: LogoBtn;
  let fixture: ComponentFixture<LogoBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
