import { Component, ViewChild, AfterViewInit, ElementRef, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators' ;

@Component({
  selector: 'jass-schieber-z',
  templateUrl: './schieber-z.component.html',
  styleUrls: ['./schieber-z.component.scss']
})
export class SchieberZComponent implements AfterViewInit {
  @ViewChild('zCanvas')
  public canvas!: ElementRef<HTMLCanvasElement>;

  @ViewChild('zDiv')
  public div!: ElementRef<HTMLDivElement>;

  private canvasContext!: CanvasRenderingContext2D;

  // Schieber Z Spezifikationen
  private readonly zLineColor = 'red';
  private topBottomMargin = 15;
  private zLineWidth = 5;

  // Schieber Punktelinien Spezifikationen
  private pointLineWidth = 1;
  private pointLineHeight = this.topBottomMargin * 2;
  private horizontalLineSpacing = 6;
  private diagonalOverlap = 3;
  private readonly pointLineColor = 'white';

  // Other Vars
  private bottomZLine = 0;
  private textLineWidth = 3;
  private crossX = 50;
  private crossDistance = 25;

  @Input()
  public twentyLines = 23;
  @Input()
  public fiftyLines = 3;
  @Input()
  public hundredLines = 7;
  @Input()
  public Rests = 8;

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

  private redraw() {
    console.warn('redraw');
    const totalWidth = this.canvas.nativeElement.width = this.div.nativeElement.offsetWidth;
    const totalHeight = this.canvas.nativeElement.height = totalWidth * 0.8;
    this.bottomZLine = totalHeight - this.topBottomMargin;

    // customize Vars to Screen
    let big = false;
    if (totalWidth >= 400) {
      big = true;
    } else {
      big = false;
    }
    const restSizeInPx = big ? '80px' : '50px';
    const restSize = big ? 70 : 40;
    this.zLineWidth = big ?  8 : 5;
    this.pointLineWidth = big ? 7 : 3;
    this.textLineWidth = big ? 4 : 1;
    this.topBottomMargin = big ? 20 : 15;
    this.crossX = big ? 90 : 55;
    this.crossDistance = big ? 35 : 25;
    this.horizontalLineSpacing = big ? 12 : 6;
    this.diagonalOverlap = big ? 8 : 5;
    this.pointLineHeight = this.topBottomMargin * 2;

    this.canvasContext.lineWidth = this.zLineWidth;
    this.canvasContext.strokeStyle = this.zLineColor;
    this.drawZ(totalWidth);

    this.canvasContext.lineWidth = this.pointLineWidth;
    this.canvasContext.strokeStyle = this.pointLineColor;
    this.drawTwentyPoints(totalWidth, totalHeight, this.twentyLines);
    this.drawFiftyPoints(totalWidth, totalHeight, this.fiftyLines);
    this.drawHundredPoints(this.hundredLines);

    this.canvasContext.lineWidth = this.textLineWidth;
    this.canvasContext.font = `${restSizeInPx} Shadows Into Light`;
    this.canvasContext.strokeText('+' + this.Rests.toString(), totalWidth - restSize, totalHeight / 2 + restSize / 2, restSize);
  }

  private drawFiftyPoints(totalWidth: number, totalHeight: number, amountOfLines: number) {
    this.canvasContext.beginPath();
    for (let i = 1; i <= amountOfLines; i++) {
      const isSecond = i % 2 === 0;
      if (isSecond) {
        this.drawCrossLine(1, totalHeight, totalWidth, this.crossX);
        this.crossX += this.crossDistance;
      } else {
        this.drawCrossLine(3, totalHeight, totalWidth, this.crossX);
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

  private drawZ(totalWidth: number) {
    this.canvasContext.beginPath();
    this.drawLine(0, this.topBottomMargin, totalWidth, this.topBottomMargin);
    this.drawLine(totalWidth, this.topBottomMargin, 0, this.bottomZLine);
    this.drawLine(0, this.bottomZLine, totalWidth, this.bottomZLine);
    this.canvasContext.stroke();
  }

  private drawCrossLine(piFourth: number, totalHeight: number, totalWidth: number, crossX: number) {
    const halfLine = this.pointLineHeight / 2;
    const tanAlpha = ((totalHeight - 2 * this.topBottomMargin) / totalWidth);
    const crossY = tanAlpha * crossX;
    const crossRadians = Math.atan(tanAlpha) + ((piFourth / 4) * Math.PI);
    const cosCrossRad = Math.cos(crossRadians);
    const sinCrossRad = Math.sin(crossRadians);
    this.drawLine(crossX + (cosCrossRad * (halfLine)), (this.bottomZLine) - (crossY + (sinCrossRad * (halfLine))),
                  crossX - (cosCrossRad * (halfLine)), (this.bottomZLine) - (crossY - (sinCrossRad * (halfLine))));
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

  private onWindowResize() {
    this.redraw();
  }
}
