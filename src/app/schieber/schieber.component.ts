import { Component } from '@angular/core';
import { MatDialog } from '../../../node_modules/@angular/material';
import { DialogPunkteComponent, DialogData } from '../dialog-punkte/dialog-punkte.component';
import { DialogWeisenComponent } from '../dialog-weisen/dialog-weisen.component';
import { SchieberSpiel, SchieberTeam } from '../schieber-spiel';

@Component({
  selector: 'jass-schieber',
  templateUrl: './schieber.component.html',
  styleUrls: ['./schieber.component.scss']
})
export class SchieberComponent {
  public get currentPlayer(): string {
    switch (this.game.runden.length % 4) {
      case 0:
        return this.game.teamA.player1;
      case 1:
        return this.game.teamB.player1;
      case 2:
        return this.game.teamA.player2;
      case 3:
        return this.game.teamB.player2;
      default:
        throw new Error('The laws of math do not apply on this computer, abort!');
    }
  }

  public game: SchieberSpiel;

  constructor(public dialog: MatDialog) {
    this.game = new SchieberSpiel(true, new SchieberTeam('Hans', 'Heidi'), new SchieberTeam('Max', 'Müller'));
  }

  openPunkteDialog(): void {
    const dialogRef = this.dialog.open<DialogPunkteComponent, void, DialogData>(DialogPunkteComponent, {
      width: '400px',
      height: '500px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(p => {
      if (p) {
        this.addPoints(p.points);
      }
    });
  }

  openWeisenDialog(): void {
    const dialogRef = this.dialog.open<DialogWeisenComponent, void, DialogData>(DialogWeisenComponent, {
      width: '400px',
      height: '500px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.addPoints(data.points);
      }
    });
  }

  public addPoints(addPoints: number) {
    this.game.teamA.addPoints(addPoints);
    this.game.teamB.addPoints(157 - addPoints);
  }
}
