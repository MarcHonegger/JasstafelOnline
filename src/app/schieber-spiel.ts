import { NormalerTrumpf } from './shared/trumpf';
import { Trumpf } from './coiffeur-spiel';

export class SchieberTrümpfe {
    public schieberTrümpfe: Array<Trumpf> = ['Eicheln', 'Rosen', 'Schellen', 'Schilten', 'Obenabe', 'Uneufe'];
}

export class SchieberSpiel {
    public runden: ReadonlyArray<SchieberRunde> = [];

    constructor(
        public readonly gameId: number,
        public readonly mitMultiplikatoren: boolean,
        public readonly teamA: SchieberTeam,
        public readonly teamB: SchieberTeam
    ) {}
}

export class SchieberRunde {
    constructor(
        public readonly trumpf: NormalerTrumpf,
        public rundenPunkteTeamA: number,
        public rundenPunkteTeamB: number
    ) {}
}

export class SchieberTeam {
    public get totalPoints(): number {
        return this.hundredLines * 100
            + this.fiftyLines * 50
            + this.twentyLines * 20
            + this.remainder;
    }

    constructor(
        public readonly player1: string,
        public readonly player2: string,
        public twentyLines = 0,
        public fiftyLines = 0,
        public hundredLines = 0,
        public remainder = 0
    ) { }

    public addPoints(points: number): void {
        points += this.remainder;
        while (points >= 100) {
            points -= 100;
            this.hundredLines++;
        }
        while (points >= 50) {
            points -= 50;
            this.fiftyLines++;
        }
        while (points >= 20) {
            points -= 20;
            this.twentyLines++;
        }
        this.remainder = points;
    }
}
