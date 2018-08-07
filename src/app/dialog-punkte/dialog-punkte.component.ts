import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '../../../node_modules/@angular/material';

export interface DialogData {
  points: number;
}

@Component({
  selector: 'jass-dialog-punkte',
  templateUrl: './dialog-punkte.component.html',
  styleUrls: ['./dialog-punkte.component.scss']
})
export class DialogPunkteComponent {
  public points = 0;

  public addPoints() {
    this.points += 50;
  }

  constructor(
    public dialogRef: MatDialogRef<DialogPunkteComponent, DialogData>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  public closeDialog(): void {
    this.dialogRef.close({ points: this.points });
  }
}
