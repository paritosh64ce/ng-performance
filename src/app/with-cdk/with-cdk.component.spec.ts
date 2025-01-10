import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithCdkComponent } from './with-cdk.component';

describe('WithCdkComponent', () => {
  let component: WithCdkComponent;
  let fixture: ComponentFixture<WithCdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithCdkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
