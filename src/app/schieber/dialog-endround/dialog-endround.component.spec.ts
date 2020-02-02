import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEndRoundComponent } from './dialog-endround.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatInputModule, MatButtonToggleModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogEndRoundComponent', () => {
  let component: DialogEndRoundComponent;
  let fixture: ComponentFixture<DialogEndRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, MatButtonModule, MatDialogModule, MatInputModule, MatButtonToggleModule, NoopAnimationsModule ],
      declarations: [ DialogEndRoundComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEndRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
