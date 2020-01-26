import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogStartSchieberComponent } from '../dialog-start-schieber/dialog-start-schieber.component';

@Component({
  selector: 'jass-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openStartSchieberDialog(): void {
    this.dialog.open<DialogStartSchieberComponent, void>(DialogStartSchieberComponent, {
      width: '80vw',
      height: '80vh',
      disableClose: true
    });
  }
}
