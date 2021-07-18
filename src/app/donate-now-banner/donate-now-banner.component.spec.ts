import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateNowBannerComponent } from './donate-now-banner.component';

describe('DonateNowBannerComponent', () => {
  let component: DonateNowBannerComponent;
  let fixture: ComponentFixture<DonateNowBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonateNowBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateNowBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
