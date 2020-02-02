import { Injectable } from '@angular/core';
import { SchieberSpiel, SchieberTeam } from './schieber-spiel';

@Injectable({
  providedIn: 'root',
})
export class GameDatabase {
    private readonly SchieberKeyPrefix = 'SchieberSpiel_';
    private readonly CoiffeurKeyPrefix = 'CoiffeurSpiel_';
    private readonly GameMetadataListKey = 'AlleSpiele';
    private readonly gameMetadata: GameMetadata[];

    constructor() {
      const gameMetadata = this.loadObject(this.GameMetadataListKey);
      if (gameMetadata !== null && Array.isArray(gameMetadata)) {
        this.gameMetadata = gameMetadata as GameMetadata[];
      } else {
        this.gameMetadata = [];
      }
    }

    public createSchieber(playerOne: string, playerTwo: string, playerThree: string, playerFour: string): SchieberSpiel {
        const schieberSpiel = new SchieberSpiel(
          this.getNextId(),
          false, // TODO
          new SchieberTeam(playerOne, playerThree),
          new SchieberTeam(playerTwo, playerFour)
        );

        this.saveSchieber(schieberSpiel);

        return schieberSpiel;
    }

    public saveSchieber(spiel: SchieberSpiel): void {
      const newMetadata: GameMetadata = {
        id: spiel.gameId,
        description: 'Chääs',
        finished: false,
        type: 'schieber',
        started: 'Hüt oder so',
        shortTitle: 'Was weiss ich'
      };
      const existingMetadata = this.gameMetadata.findIndex(g => g.id === spiel.gameId);
      if (existingMetadata === -1) {
        this.gameMetadata.push(newMetadata);
      } else {
        this.gameMetadata[existingMetadata] = newMetadata;
      }
      this.storeObject(this.SchieberKeyPrefix + spiel.gameId, spiel);
      this.storeObject(this.GameMetadataListKey, this.gameMetadata);
    }

    private getNextId(): number {
      return this.gameMetadata.reduce((max, n) => n.id >  max ? n.id : max, 0) + 1;
    }

    public loadSchieberById(id: number): SchieberSpiel | null {
      const loadedObject = this.loadObject(this.SchieberKeyPrefix + id);
      if (loadedObject === null) {
        return null;
      }
      const loadedSchieber = loadedObject as SchieberSpiel;
      const teamA = loadedSchieber.teamA;
      const teamB = loadedSchieber.teamB;
      return new SchieberSpiel(
        id,
        loadedSchieber.mitMultiplikatoren,
        new SchieberTeam(teamA.player1, teamA.player2, teamA.twentyLines, teamA.fiftyLines, teamA.hundredLines, teamA.remainder),
        new SchieberTeam(teamB.player1, teamB.player2, teamB.twentyLines, teamB.fiftyLines, teamB.hundredLines, teamB.remainder)
      );
    }

    private loadObject(key: string): any | null {
      const storedValue = localStorage.getItem(key);
      if (!storedValue) {
        return null;
      }

      try {
        return JSON.parse(storedValue);
      } catch (error) {
        console.error('Failed parsing object with key ' + key, storedValue);
        return null;
      }
    }

    private storeObject(key: string, object: any): void {
      localStorage.setItem(key, JSON.stringify(object));
    }

}

interface GameMetadata {
  id: number;
  type: 'schieber' | 'coiffeur';
  finished: boolean;
  started: string;
  shortTitle: string;
  description: string;
}
