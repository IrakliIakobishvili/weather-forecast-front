import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutelyComponent } from './minutely.component';

describe('MinutelyComponent', () => {
  let component: MinutelyComponent;
  let fixture: ComponentFixture<MinutelyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinutelyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinutelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
