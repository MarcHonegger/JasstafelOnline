import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DialogData } from '../dialog-endround/dialog-endround.component';

@Component({
  selector: 'jass-dialog-start-schieber',
  templateUrl: './dialog-start-schieber.component.html',
  styleUrls: ['./dialog-start-schieber.component.scss']
})
export class DialogStartSchieberComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogStartSchieberComponent, DialogData>) { }

  ngOnInit() {
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

}
