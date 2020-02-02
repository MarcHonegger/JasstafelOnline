import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DialogData } from '../schieber/dialog-endround/dialog-endround.component';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { GameDatabase } from '../game-database';

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
    'Marc',
    'Pascal',
    'Jeanette',
    'Michi'
  ];

  playerOne: Array<string> = [];
  playerTwo: Array<string> = [];
  playerThree: Array<string> = [];
  playerFour: Array<string> = [];

  constructor(public dialogRef: MatDialogRef<DialogStartSchieberComponent, DialogData>,
              public router: Router,
              private gameDatabase: GameDatabase) { }

  public startSchieber(): void {
    const game = this.gameDatabase.createSchieber(this.playerOne[0], this.playerTwo[0], this.playerThree[0], this.playerFour[0]);
    this.dialogRef.close();
    this.router.navigate(['/Schieber', game.gameId]);
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.data.length === 1 &&
        event.container.data !== this.spieler) {
        transferArrayItem(event.container.data,
                          event.previousContainer.data,
                          0,
                          0);
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex + 1,
                          event.currentIndex);
        return;
      }
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
