import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DialogData } from '../dialog-endround/dialog-endround.component';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'jass-dialog-start-schieber',
  templateUrl: './dialog-start-schieber.component.html',
  styleUrls: ['./dialog-start-schieber.component.scss']
})
export class DialogStartSchieberComponent {
  spieler = [
    'Franz',
    'Heidi',
    'Franzina',
    'Heidi4.0',
    'Heidi5.0',
    'Heidi6.0',
    'Heidi7.0',
    'Heidi8.0',
    'Heidi9.0',
    'Heidi10.0'
  ];

   spielerTeamA = [
    'Müller',
    'Max'
  ];

  spielerTeamB = [
    'Zürcher',
    'Mustermann'
  ];

  constructor(public dialogRef: MatDialogRef<DialogStartSchieberComponent, DialogData>) { }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.data.length === 2 &&
      !(event.container.data === this.spieler)) {
      return;
      }
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
