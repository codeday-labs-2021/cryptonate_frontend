import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCampaignComponent } from './review-campaign.component';

describe('ReviewCampaignComponent', () => {
  let component: ReviewCampaignComponent;
  let fixture: ComponentFixture<ReviewCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewCampaignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
