import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStartSchieberComponent } from './dialog-start-schieber.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('DialogStartSchieberComponent', () => {
  let component: DialogStartSchieberComponent;
  let fixture: ComponentFixture<DialogStartSchieberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatInputModule,
        MatDialogModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [DialogStartSchieberComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogStartSchieberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
