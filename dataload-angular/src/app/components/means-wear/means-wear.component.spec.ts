import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeansWearComponent } from './means-wear.component';

describe('MeansWearComponent', () => {
  let component: MeansWearComponent;
  let fixture: ComponentFixture<MeansWearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeansWearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeansWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
