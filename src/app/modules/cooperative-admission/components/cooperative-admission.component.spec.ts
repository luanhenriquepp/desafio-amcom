import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeAdmissionComponent } from './cooperative-admission.component';

describe('CooperativeAdmissionComponent', () => {
  let component: CooperativeAdmissionComponent;
  let fixture: ComponentFixture<CooperativeAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperativeAdmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperativeAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
