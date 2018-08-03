import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchieberComponent } from './schieber.component';

describe('SchieberComponent', () => {
  let component: SchieberComponent;
  let fixture: ComponentFixture<SchieberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchieberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchieberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
