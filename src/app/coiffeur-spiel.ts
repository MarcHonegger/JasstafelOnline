export class Spiel {
    constructor(
        public reihen: Reihe[]
    ) {}
}

export class Reihe {
    constructor(
        public readonly trumpf: Trumpf,
        public readonly multiplikator: number,
        public punkteTeamA: number | null,
        public punkteTeamB: number | null
    ) {}
}

export type NormalerTrumpf = 'Schilten' | 'Eicheln' | 'Rosen' | 'Schellen';

export type SpezialTrumpf = 'Fünf Viertel' | 'Slalom' | 'Obenabe' | 'Uneufe' ;

export type Trumpf =
    NormalerTrumpf | SpezialTrumpf | 'Frei wählbar';

export class Swag {
    public mapping = new Map<Trumpf, string>([
        ['Schilten', 'mySwaggSchild.png']
    ]);
}
