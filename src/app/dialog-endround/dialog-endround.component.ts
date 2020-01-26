import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators, AbstractControl, FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';

export interface DialogData {
  pointsTeamA: number;
  pointsTeamB: number;
}

export const pointsOutOfRangeValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const points = control.value;

  return  !(0 <= points && points <= 157 || points === 257) || points === 1 || points === 156 ? { pointsOutOfRange: true } : null;
};

@Component({
  selector: 'jass-dialog-punkte',
  templateUrl: './dialog-endround.component.html',
  styleUrls: ['./dialog-endround.component.scss']
})
export class DialogEndRoundComponent {
  public get pointsA(): AbstractControl | null {
    return this.pointsForm.get('pointsA');
  }

  public get pointsB(): AbstractControl | null {
    return this.pointsForm.get('pointsB');
  }

  constructor(
    public dialogRef: MatDialogRef<DialogEndRoundComponent, DialogData>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    fb: FormBuilder) {
      this.pointsForm = fb.group({
        pointsA: [157, [pointsOutOfRangeValidator]],
        pointsB: [0, [pointsOutOfRangeValidator]],
        isMatch: [false]
      });

      this.pointsA.valueChanges.subscribe(pA => this.valueChanged(pA, 157 - pA));
      this.pointsB.valueChanges.subscribe(pB => this.valueChanged(157 - pB, pB));
    }

  public readonly pointsForm: FormGroup;

  public addPoints() {
    this.dialogRef.close({ pointsTeamA: this.pointsA.value, pointsTeamB: this.pointsB.value });
  }

    private valueChanged(pointsA: number, pointsB: number) {
      if (this.pointsA.valid) {
        this.pointsB.setValue(pointsB, { emitEvent: false });
      }
      if (this.pointsB.valid) {
        this.pointsA.setValue(pointsA, { emitEvent: false });
      }
      if (this.pointsA.value === 257) {
        this.pointsB.setValue(0, { emitEvent: false });
      } else if (this.pointsB.value === 257) {
        this.pointsA.setValue(0, { emitEvent: false });
      }
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
