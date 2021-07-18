import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCampaign3Component } from './create-campaign3.component';

describe('CreateCampaign3Component', () => {
  let component: CreateCampaign3Component;
  let fixture: ComponentFixture<CreateCampaign3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCampaign3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCampaign3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
