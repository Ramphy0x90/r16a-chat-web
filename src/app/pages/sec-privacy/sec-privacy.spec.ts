import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecPrivacy } from './sec-privacy';

describe('SecPrivacy', () => {
  let component: SecPrivacy;
  let fixture: ComponentFixture<SecPrivacy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecPrivacy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecPrivacy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
