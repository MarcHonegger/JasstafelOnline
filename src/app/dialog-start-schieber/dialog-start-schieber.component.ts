import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DialogData } from '../schieber/dialog-endround/dialog-endround.component';
import { Router } from '@angular/router';
import { GameDatabase } from '../game-database';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PlayerDatabase } from '../player-database';

@Component({
  selector: 'jass-dialog-start-schieber',
  templateUrl: './dialog-start-schieber.component.html',
  styleUrls: ['./dialog-start-schieber.component.scss']
})
export class DialogStartSchieberComponent implements OnInit {
  playerOneOptions: Observable<string[]>;
  playerTwoOptions: Observable<string[]>;
  playerThreeOptions: Observable<string[]>;
  playerFourOptions: Observable<string[]>;

  playerControls = new FormGroup({
    playerOneControl: new FormControl(),
    playerTwoControl: new FormControl(),
    playerThreeControl: new FormControl(),
    playerFourControl: new FormControl()
  });

  private get playerOne() {
    return this.playerControls.get('playerOneControl').value;
  }

  private get playerTwo() {
    return this.playerControls.get('playerTwoControl').value;
  }

  private get playerThree() {
    return this.playerControls.get('playerThreeControl').value;
  }

  private get playerFour() {
    return this.playerControls.get('playerFourControl').value;
  }

  constructor(public dialogRef: MatDialogRef<DialogStartSchieberComponent, DialogData>,
              public router: Router,
              private gameDatabase: GameDatabase,
              private playerDatabase: PlayerDatabase) {}

  ngOnInit() {
    this.playerOneOptions = this.getFilteredValue(this.playerControls.get('playerOneControl') as FormControl);
    this.playerTwoOptions = this.getFilteredValue(this.playerControls.get('playerTwoControl') as FormControl);
    this.playerThreeOptions = this.getFilteredValue(this.playerControls.get('playerThreeControl') as FormControl);
    this.playerFourOptions = this.getFilteredValue(this.playerControls.get('playerFourControl') as FormControl);
  }

  private getFilteredValue(inputControl: FormControl): Observable<string[]> {
    return inputControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filter(value))
    );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.playerDatabase.getPlayers().filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  public startSchieber(): void {
    this.playerDatabase.addPlayers([this.playerOne, this.playerTwo, this.playerThree, this.playerFour]);
    const game = this.gameDatabase.createSchieber(this.playerOne, this.playerTwo, this.playerThree, this.playerFour);
    this.dialogRef.close();
    this.router.navigate(['/Schieber', game.gameId]);
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }


}