import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesDataComponent } from './mobiles-data.component';

describe('MobilesDataComponent', () => {
  let component: MobilesDataComponent;
  let fixture: ComponentFixture<MobilesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
