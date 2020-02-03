import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogStartSchieberComponent } from '../dialog-start-schieber/dialog-start-schieber.component';
import { Router } from '@angular/router';

@Component({
  selector: 'jass-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  openStartSchieberDialog(): void {
    this.dialog.open<DialogStartSchieberComponent, void>(DialogStartSchieberComponent, {
      width: '80vw',
      height: '80vh',
      disableClose: true
    });
  }

  openOverviewGames() {
    this.router.navigate(['/ÜbersichtSpiele']);
  }
}
