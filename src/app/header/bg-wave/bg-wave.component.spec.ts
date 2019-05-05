import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgWaveComponent } from './bg-wave.component';

describe('BgWaveComponent', () => {
  let component: BgWaveComponent;
  let fixture: ComponentFixture<BgWaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgWaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
