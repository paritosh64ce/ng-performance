import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatChild1Component } from './repeat-child1.component';

describe('RepeatChild1Component', () => {
  let component: RepeatChild1Component;
  let fixture: ComponentFixture<RepeatChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepeatChild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
