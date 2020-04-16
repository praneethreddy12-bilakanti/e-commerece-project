import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLadiesComponent } from './header-ladies.component';

describe('HeaderLadiesComponent', () => {
  let component: HeaderLadiesComponent;
  let fixture: ComponentFixture<HeaderLadiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLadiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLadiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
