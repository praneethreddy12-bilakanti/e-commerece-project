import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMensComponent } from './header-mens.component';

describe('HeaderMensComponent', () => {
  let component: HeaderMensComponent;
  let fixture: ComponentFixture<HeaderMensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
