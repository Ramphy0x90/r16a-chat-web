import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeRepos } from './code-repos';

describe('CodeRepos', () => {
  let component: CodeRepos;
  let fixture: ComponentFixture<CodeRepos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeRepos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeRepos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
