import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchieberComponent } from './schieber.component';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { SchieberZComponent } from './schieber-z/schieber-z.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SchieberComponent', () => {
  let component: SchieberComponent;
  let fixture: ComponentFixture<SchieberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatButtonModule, MatDialogModule, RouterTestingModule.withRoutes([]) ],
      declarations: [ SchieberComponent, SchieberZComponent ]
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
