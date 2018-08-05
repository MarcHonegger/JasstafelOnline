import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators' ;

@Component({
  selector: 'jass-schieber',
  templateUrl: './schieber.component.html',
  styleUrls: ['./schieber.component.scss']
})
export class SchieberComponent implements AfterViewInit {
  @ViewChild('zCanvas')
  public canvas!: ElementRef<HTMLCanvasElement>;

  @ViewChild('zDiv')
  public div!: ElementRef<HTMLDivElement>;

  private canvasContext!: CanvasRenderingContext2D;

  private readonly topBottomMargin = 20;
  private readonly zLineWidth = 10;
  private readonly zLineColor = 'red';

  private readonly pointLineWidth = 5;
  private readonly pointLineColor = 'white';
  private readonly pointLineHeight = this.topBottomMargin * 2;

  private readonly diagonalOverlap = 10;
  private readonly horizontalLineSpacing = 10;

  private roundPoints = 0;
  public totalPoints = 0;
  private rests = 0;

  private amountOfHundredLines = 0;
  private amountOfTwentyLines = 0;
  private amountOfFiftyLines = 0;

  public showPoints = 0;

  constructor() {
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(250)
      )
      .subscribe(() => this.onWindowResize());
  }

  public ngAfterViewInit() {
    const context = this.canvas.nativeElement.getContext('2d');
    if (context == null) {
      throw new Error('This should never happen, canvas context was null');
    }

    this.canvasContext = context;

    this.onWindowResize();
  }

  public addPoints(points: number) {
    if (points === 0) {
      this.roundPoints = this.roundPoints + Math.floor(Math.random() * 200);
      this.showPoints = this.roundPoints;
    } else {
      this.roundPoints = points;
      this.showPoints = points;
    }
    this.redraw();
  }

  private redraw() {
    console.warn('redraw');
    const totalWidth = this.canvas.nativeElement.width = this.div.nativeElement.offsetWidth;
    const totalHeight = this.canvas.nativeElement.height = totalWidth * 0.8;

    this.canvasContext.lineWidth = this.zLineWidth;
    this.canvasContext.strokeStyle = this.zLineColor;
    this.drawZ(totalWidth, totalHeight);
    this.canvasContext.lineWidth = this.pointLineWidth;
    this.canvasContext.strokeStyle = this.pointLineColor;
    this.completeRound(totalWidth, totalHeight);
  }

  private drawFiftyPoints(totalHeight: number, totalWidth: number, amountOfLines: number) {
    this.canvasContext.beginPath();
    let crossX = 75;
    for (let i = 1; i <= amountOfLines; i++) {
      const isSecond = i % 2 === 0;
      if (isSecond) {
        this.drawCrossLine(1, totalHeight, totalWidth, crossX);
        crossX += 40;
      } else {
        this.drawCrossLine(3, totalHeight, totalWidth, crossX);
      }
    }
    this.canvasContext.stroke();
  }

  private drawTwentyPoints(totalWidth: number, totalHeight: number, amountOfLines: number) {
    this.canvasContext.beginPath();
    for (let i = 1; i <= amountOfLines; i++) {
      const isDiagonalLine = i % 5 === 0;
      if (isDiagonalLine) {
        this.drawDiagonalLine(totalWidth - (i - 1) * this.horizontalLineSpacing,
        totalHeight - this.pointLineHeight, totalWidth - (i - 4) * this.horizontalLineSpacing);
      } else {
        this.drawStraightLineUp(totalWidth - i * this.horizontalLineSpacing, totalHeight);
      }
    }
    this.canvasContext.stroke();
  }

  private drawHundredPoints(amountOfLines: number) {
    this.canvasContext.beginPath();
    for (let i = 1; i <= amountOfLines; i++) {
      const isDiagonalLine = i % 5 === 0;
      if (isDiagonalLine) {
        this.drawDiagonalLine((i - 4) * this.horizontalLineSpacing,
        0, (i - 1) * this.horizontalLineSpacing);
      } else {
        this.drawStraightLineUp(i * this.horizontalLineSpacing, this.pointLineHeight);
      }
    }
    this.canvasContext.stroke();

    this.canvasContext.beginPath();
    // this.drawDiagonalLine(100, 0, 130);
    this.canvasContext.stroke();
  }

  private drawZ(totalWidth: number, totalHeight: number) {
    this.canvasContext.beginPath();
    this.canvasContext.moveTo(0, this.topBottomMargin);
    this.canvasContext.lineTo(totalWidth, this.topBottomMargin);
    this.canvasContext.moveTo(totalWidth, this.topBottomMargin);
    this.canvasContext.lineTo(0, totalHeight - this.topBottomMargin);
    this.canvasContext.moveTo(0, totalHeight - this.topBottomMargin);
    this.canvasContext.lineTo(totalWidth, totalHeight - this.topBottomMargin);
    this.canvasContext.stroke();
  }

  private drawCrossLine(piFourth: number, totalHeight: number, totalWidth: number, crossX: number) {
    const bottomZLine = totalHeight - this.topBottomMargin;
    const halfLine = this.pointLineHeight / 2;
    const tanAlpha = ((totalHeight - 2 * this.topBottomMargin) / totalWidth);
    const crossY = tanAlpha * crossX;
    const crossRadians = Math.atan(tanAlpha) + ((piFourth / 4) * Math.PI);
    this.drawLine(crossX + (Math.cos(crossRadians) * (halfLine)), (bottomZLine) - (crossY + (Math.sin(crossRadians) * (halfLine))),
                  crossX - (Math.cos(crossRadians) * (halfLine)), (bottomZLine) - (crossY - (Math.sin(crossRadians) * (halfLine))));
  }

  private drawDiagonalLine(xFirstLine: number, yTop: number, xLastLine: number) {
    this.drawLine(xFirstLine - this.diagonalOverlap, yTop, xLastLine + this.diagonalOverlap, yTop + this.pointLineHeight);
  }

  private drawStraightLineUp(x: number, y: number) {
    this.drawLine(x, y, x, y - this.pointLineHeight);
  }

  private drawLine(xStart: number, yStart: number, xEnd: number, yEnd: number) {
    this.canvasContext.moveTo(xStart, yStart);
    this.canvasContext.lineTo(xEnd, yEnd);
  }

  private completeRound(totalWidth: number, totalHeight: number) {
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
  }

  private onWindowResize() {
    this.redraw();
  }
}
