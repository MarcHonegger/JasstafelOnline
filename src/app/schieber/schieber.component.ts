import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../node_modules/@angular/material';
import { DialogEndRoundComponent, DialogData } from './dialog-endround/dialog-endround.component';
import { DialogWeisenComponent } from './dialog-weisen/dialog-weisen.component';
import { SchieberSpiel } from '../schieber-spiel';
import { GameDatabase } from '../game-database';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jass-schieber',
  templateUrl: './schieber.component.html',
  styleUrls: ['./schieber.component.scss']
})
export class SchieberComponent implements OnInit {
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
  public id: number;


  constructor(public dialog: MatDialog, public gameData: GameDatabase, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      const gameId = +map.get('gameId');
      if (gameId) {
        this.game = this.gameData.loadSchieberById(gameId);
      }
      else {
        this.game = undefined;
      }
    });
  }

  openEndRoundDialog(): void {
    const dialogRef = this.dialog.open<DialogEndRoundComponent, void, DialogData>(DialogEndRoundComponent, {
      width: '600px',
      height: '500px',
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
