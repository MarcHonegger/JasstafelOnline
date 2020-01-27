import { Component } from '@angular/core';
import { MatDialog } from '../../../node_modules/@angular/material';
import { DialogEndRoundComponent, DialogData } from '../dialog-endround/dialog-endround.component';
import { DialogWeisenComponent } from '../dialog-weisen/dialog-weisen.component';
import { SchieberSpiel, SchieberTeam, SchieberRunde } from '../schieber-spiel';

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

  private rounds = 0;

  public game: SchieberSpiel;


  constructor(public dialog: MatDialog) {
    this.game = new SchieberSpiel(true, new SchieberTeam('Hans', 'Heidi'), new SchieberTeam('Max', 'Müller'));
  }

  openEndRoundDialog(): void {
    const dialogRef = this.dialog.open<DialogEndRoundComponent, void, DialogData>(DialogEndRoundComponent, {
      width: '600px',
      height: '450px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.addPoints(data.pointsTeamA, data.pointsTeamB, data.multiplikator);
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
        this.addPoints(data.pointsTeamA, data.pointsTeamB, data.multiplikator);
      }
    });
  }

  public addPoints(addPointsA: number, addPointsB: number, multiplikator: number) {
    if (this.game.mitMultiplikatoren) {
      addPointsA *= multiplikator;
      addPointsB *= multiplikator;
    }
    this.game.teamA.addPoints(addPointsA);
    this.game.teamB.addPoints(addPointsB);

    this.saveRound(addPointsA, addPointsB);
  }

  private saveRound(pointsA: number, pointsB: number) {

  }
}
