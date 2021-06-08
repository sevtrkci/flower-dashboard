import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNaviComponent } from './header-navi.component';

describe('HeaderNaviComponent', () => {
  let component: HeaderNaviComponent;
  let fixture: ComponentFixture<HeaderNaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNaviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
