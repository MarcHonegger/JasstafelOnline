import { Component, Input } from '@angular/core';

@Component({
  selector: 'jass-schieber',
  templateUrl: './schieber.component.html',
  styleUrls: ['./schieber.component.scss']
})
export class SchieberComponent {
  @Input()
  public points = 0;
  public fiftyLines = 0;
  public twentyLines = 0;
  public hundredLines = 0;
  public rests = 0;
  public totalPoints = 0;

  public playerTop = 'Franz';
  public playerBottom = 'Heidi';
  public playerLeft = 'Frank';
  public playerRight = 'Peter';

  public currentPlayer: string | null = null;

  public nextPlayer() {
    switch (this.currentPlayer) {
      case this.playerTop:
        this.currentPlayer = this.playerRight;
        break;
      case this.playerRight:
        this.currentPlayer = this.playerBottom;
        break;
      case this.playerBottom:
        this.currentPlayer = this.playerLeft;
        break;
      case this.playerLeft:
        this.currentPlayer = this.playerTop;
        break;
    }
  }

  public addPoints(addPoints: number) {
    this.points = addPoints;
    this.getAmountOfLines();
  }

  public getAmountOfLines() {
    this.totalPoints += this.points;
    this.points += this.rests;

    this.twentyLines += Math.floor(this.points % 100 % 50 / 20);
    this.fiftyLines += Math.floor(this.points % 100 / 50);
    this.hundredLines += Math.floor(this.points / 100);
    this.rests = Math.floor(this.points % 100 % 50 % 20);
  }
}
