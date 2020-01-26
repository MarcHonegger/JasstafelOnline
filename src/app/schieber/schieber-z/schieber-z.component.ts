import { Component, ViewChild, AfterViewInit, ElementRef, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators' ;

@Component({
  selector: 'jass-schieber-z',
  templateUrl: './schieber-z.component.html',
  styleUrls: ['./schieber-z.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchieberZComponent implements AfterViewInit, OnChanges {
  @ViewChild('zCanvas', {static: false})
  public canvas!: ElementRef<HTMLCanvasElement>;

  @ViewChild('zDiv', {static: false})
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
  private readonly pointLineColor = 'black';

  // Other Vars
  private bottomZLine = 0;
  private textLineWidth = 3;
  private crossX = 50;
  private crossDistance = 25;
  private remainderSize = 50;

  // TODO default 0
  @Input()
  public twentyLines = 0;
  @Input()
  public fiftyLines = 0;
  @Input()
  public hundredLines = 0;
  @Input()
  public remainder = 0;
  @Input()
  public playerOne = '';
  @Input()
  public playerTwo = '';

  constructor() {
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(250)
      )
      .subscribe(() => this.onWindowResize());
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (Object.values(changes).some(c => !c.isFirstChange())) {
      this.redraw();
    }
  }

  public ngAfterViewInit() {
    const context = this.canvas.nativeElement.getContext('2d');
    if (context == null) {
      throw new Error('This should never happen, canvas context was null');
    }

    this.canvasContext = context;

    this.redraw();
  }

  private redraw() {
    const totalWidth = this.canvas.nativeElement.width = this.div.nativeElement.offsetWidth;
    const totalHeight = this.canvas.nativeElement.height = totalWidth * 0.8 + this.remainderSize;
    this.bottomZLine = totalHeight - this.topBottomMargin;

    // customize Vars to Screen
    if (totalWidth >= 625) {
      this.remainderSize = 110;
      this.zLineWidth =  8;
      this.pointLineWidth = 6;
      this.textLineWidth = 4;
      this.topBottomMargin = 22;
      this.crossX = 70;
      this.crossDistance = 35;
      this.horizontalLineSpacing = 12;
      this.diagonalOverlap = 8;
    } else if (totalWidth >= 450) {
      this.remainderSize = 90;
      this.zLineWidth =  6;
      this.pointLineWidth = 4;
      this.textLineWidth = 3;
      this.crossX = 60;
      this.crossDistance = 30;
      this.horizontalLineSpacing = 8;
      this.diagonalOverlap = 6;
    } else {
      this.remainderSize = 70;
      this.zLineWidth = 3;
      this.pointLineWidth = 2;
      this.textLineWidth = 1;
      this.crossX = 60;
      this.crossDistance =  25;
      this.horizontalLineSpacing = 6;
      this.diagonalOverlap = 4;
    }
    this.pointLineHeight = this.topBottomMargin * 2;

    this.canvasContext.font = `${this.remainderSize}px Shadows Into Light`;
    this.canvasContext.lineWidth = this.zLineWidth;
    this.canvasContext.strokeStyle = this.zLineColor;
    this.drawZ(totalWidth);

    this.canvasContext.lineWidth = this.pointLineWidth;
    this.canvasContext.strokeStyle = this.pointLineColor;
    this.drawTwentyPoints(totalWidth, totalHeight, this.twentyLines);
    this.drawFiftyPoints(totalWidth, totalHeight, this.fiftyLines);
    this.drawHundredPoints(this.hundredLines);

    if (this.remainder > 0) {
      const halfRemainderize = this.remainderSize / 2;
      const halfHeight = totalHeight / 2;
      this.canvasContext.lineWidth = this.textLineWidth;
      const message = `+${this.remainder}`;
      this.canvasContext.strokeText(message, totalWidth - this.remainderSize, halfHeight + halfRemainderize, this.remainderSize);
    }
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
