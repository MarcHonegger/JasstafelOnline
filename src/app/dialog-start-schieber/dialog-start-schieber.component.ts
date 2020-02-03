import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DialogData } from '../schieber/dialog-endround/dialog-endround.component';
import { Router } from '@angular/router';
import { GameDatabase } from '../game-database';
import { FormControl, FormGroup, FormBuilder, RequiredValidator } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PlayerDatabase } from '../player-database';

@Component({
  selector: 'jass-dialog-start-schieber',
  templateUrl: './dialog-start-schieber.component.html',
  styleUrls: ['./dialog-start-schieber.component.scss']
})
export class DialogStartSchieberComponent implements OnInit {

  private get playerOne() {
    return this.playerControls.get('playerOneControl') as FormControl;
  }

  private get playerTwo() {
    return this.playerControls.get('playerTwoControl') as FormControl;
  }

  private get playerThree() {
    return this.playerControls.get('playerThreeControl') as FormControl;
  }

  private get playerFour() {
    return this.playerControls.get('playerFourControl') as FormControl;
  }

  playerOneOptions: Observable<string[]>;
  playerTwoOptions: Observable<string[]>;
  playerThreeOptions: Observable<string[]>;
  playerFourOptions: Observable<string[]>;

  public readonly playerControls: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogStartSchieberComponent, DialogData>,
    public router: Router,
    private gameDatabase: GameDatabase,
    private playerDatabase: PlayerDatabase,
    fb: FormBuilder) {
      this.playerControls = fb.group({
        playerOneControl: [''],
        playerTwoControl: [''],
        playerThreeControl: [''],
        playerFourControl: ['']
      });
    }

  ngOnInit() {
    this.playerOneOptions = this.getFilteredValue(this.playerOne);
    this.playerTwoOptions = this.getFilteredValue(this.playerTwo);
    this.playerThreeOptions = this.getFilteredValue(this.playerThree);
    this.playerFourOptions = this.getFilteredValue(this.playerFour);
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
    this.playerDatabase.addPlayers([this.playerOne.value, this.playerTwo.value, this.playerThree.value, this.playerFour.value]);
    const game = this.gameDatabase.createSchieber(
      this.playerOne.value,
      this.playerTwo.value,
      this.playerThree.value,
      this.playerFour.value);
    this.dialogRef.close();
    this.router.navigate(['/Schieber', game.gameId]);
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }


}
