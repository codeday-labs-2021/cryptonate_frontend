import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationCardComponent } from './donation-card.component';

describe('DonationCardComponent', () => {
  let component: DonationCardComponent;
  let fixture: ComponentFixture<DonationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
