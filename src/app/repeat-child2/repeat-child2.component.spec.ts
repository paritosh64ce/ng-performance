import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatChild2Component } from './repeat-child2.component';

describe('RepeatChild2Component', () => {
  let component: RepeatChild2Component;
  let fixture: ComponentFixture<RepeatChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepeatChild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
