import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchieberZComponent } from './schieber-z.component';

describe('SchieberZComponent', () => {
  let component: SchieberZComponent;
  let fixture: ComponentFixture<SchieberZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchieberZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchieberZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
