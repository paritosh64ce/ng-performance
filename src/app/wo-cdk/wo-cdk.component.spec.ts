import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoCdkComponent } from './wo-cdk.component';

describe('WoCdkComponent', () => {
  let component: WoCdkComponent;
  let fixture: ComponentFixture<WoCdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WoCdkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
