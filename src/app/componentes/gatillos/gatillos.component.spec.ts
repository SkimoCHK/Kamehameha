import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatillosComponent } from './gatillos.component';

describe('GatillosComponent', () => {
  let component: GatillosComponent;
  let fixture: ComponentFixture<GatillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GatillosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GatillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
