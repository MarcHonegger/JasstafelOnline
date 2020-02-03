import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerDatabase {
  public players: ReadonlyArray<string> = [];

  constructor() {
    this.players = JSON.parse(localStorage.getItem('players') || '[]');
  }

  addPlayers(playerNames: string[]) {
    this.players = [
      ...playerNames,
      ...this.players.filter(p => playerNames.indexOf(p) === -1).slice(0, 30)
    ];
    localStorage.setItem('players', JSON.stringify(this.players));
  }

  getPlayers(): string[] {
    return JSON.parse(localStorage.getItem('players') || '[]');
  }
}
