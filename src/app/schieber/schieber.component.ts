import { Component } from '@angular/core';

@Component({
  selector: 'jass-schieber',
  templateUrl: './schieber.component.html',
  styleUrls: ['./schieber.component.scss']
})
export class SchieberComponent {

  /* public completeRound(totalWidth: number, totalHeight: number) {
    this.totalPoints += this.roundPoints;
    this.roundPoints += this.rests;
    this.amountOfHundredLines += Math.floor(this.roundPoints / 100);
    this.amountOfFiftyLines += Math.floor((this.roundPoints % 100) / 50);
    this.amountOfTwentyLines += Math.floor(((this.roundPoints % 100) % 50) / 20);
    this.rests = Math.floor((this.roundPoints % 100) % 50) % 20;
    this.roundPoints = 0;

    if (this.totalPoints >= 2500) {
      this.totalPoints = 0;
      this.amountOfFiftyLines = 0;
      this.amountOfHundredLines = 0;
      this.amountOfTwentyLines = 0;
    }

    this.drawHundredPoints(this.amountOfHundredLines);
    this.drawTwentyPoints(totalWidth, totalHeight, this.amountOfTwentyLines);
    this.drawFiftyPoints(totalHeight, totalWidth, this.amountOfFiftyLines);
  } */
}
