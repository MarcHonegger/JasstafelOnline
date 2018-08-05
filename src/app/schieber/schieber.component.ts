import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators" ;

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

  constructor() {
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(250)
      )
      .subscribe(() => this.onWindowResize());
  }

  public ngAfterViewInit() {
    this.canvasContext = this.canvas.nativeElement.getContext('2d')!;

    this.onWindowResize();
  }

  private redraw() {
    console.warn('redraw');
    const totalWidth = this.canvas.nativeElement.width = this.div.nativeElement.offsetWidth;
    const totalHeight = this.canvas.nativeElement.height = totalWidth * 0.8;

    this.canvasContext.lineWidth = 10;
    this.canvasContext.strokeStyle = 'red';

    this.canvasContext.beginPath();
    this.canvasContext.moveTo(0, 0);
    this.canvasContext.lineTo(totalWidth, 0);
    this.canvasContext.moveTo(totalWidth, 0);
    this.canvasContext.lineTo(0, totalHeight);
    this.canvasContext.moveTo(0, totalHeight);
    this.canvasContext.lineTo(totalWidth, totalHeight);
    this.canvasContext.stroke();
  }

  private onWindowResize() {
    this.redraw();
  }
}
