import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteInfoComponent } from './website-info.component';

describe('WebsiteInfoComponent', () => {
  let component: WebsiteInfoComponent;
  let fixture: ComponentFixture<WebsiteInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteInfoComponent]
    });
    fixture = TestBed.createComponent(WebsiteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
