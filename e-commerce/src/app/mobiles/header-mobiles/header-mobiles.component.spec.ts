import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMobilesComponent } from './header-mobiles.component';

describe('HeaderMobilesComponent', () => {
  let component: HeaderMobilesComponent;
  let fixture: ComponentFixture<HeaderMobilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMobilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
