import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStartSchieberComponent } from './dialog-start-schieber.component';
import { MatButtonModule, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef, MatAutocompleteModule, MatInputModule } from '@angular/material';
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
