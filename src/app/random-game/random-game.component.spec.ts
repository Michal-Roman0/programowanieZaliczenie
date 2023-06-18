import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomGameComponent } from './random-game.component';

describe('RandomGameComponent', () => {
  let component: RandomGameComponent;
  let fixture: ComponentFixture<RandomGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomGameComponent]
    });
    fixture = TestBed.createComponent(RandomGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
