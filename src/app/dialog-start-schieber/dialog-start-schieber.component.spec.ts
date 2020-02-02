import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStartSchieberComponent } from './dialog-start-schieber.component';
import { MatButtonModule, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterTestingModule } from '@angular/router/testing';

describe('DialogStartSchieberComponent', () => {
  let component: DialogStartSchieberComponent;
  let fixture: ComponentFixture<DialogStartSchieberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DragDropModule, MatButtonModule, MatDialogModule, NoopAnimationsModule, RouterTestingModule.withRoutes([]) ],
      declarations: [ DialogStartSchieberComponent ],
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
