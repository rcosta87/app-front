import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWaveComponent } from './header-wave.component';

describe('HeaderWaveComponent', () => {
  let component: HeaderWaveComponent;
  let fixture: ComponentFixture<HeaderWaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderWaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
