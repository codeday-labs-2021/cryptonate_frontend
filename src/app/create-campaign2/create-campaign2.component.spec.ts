import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCampaign2Component } from './create-campaign2.component';

describe('CreateCampaign2Component', () => {
  let component: CreateCampaign2Component;
  let fixture: ComponentFixture<CreateCampaign2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCampaign2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCampaign2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
