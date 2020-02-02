import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWeisenComponent } from './dialog-weisen.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

describe('DialogWeisenComponent', () => {
  let component: DialogWeisenComponent;
  let fixture: ComponentFixture<DialogWeisenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ DialogWeisenComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWeisenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
