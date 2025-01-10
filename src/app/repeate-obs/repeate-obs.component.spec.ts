import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeateObsComponent } from './repeate-obs.component';

describe('RepeateObsComponent', () => {
  let component: RepeateObsComponent;
  let fixture: ComponentFixture<RepeateObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepeateObsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeateObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
