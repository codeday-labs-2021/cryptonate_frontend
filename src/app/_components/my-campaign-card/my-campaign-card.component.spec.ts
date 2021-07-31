import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCampaignCardComponent } from './my-campaign-card.component';

describe('MyCampaignCardComponent', () => {
  let component: MyCampaignCardComponent;
  let fixture: ComponentFixture<MyCampaignCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCampaignCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCampaignCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
