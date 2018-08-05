import { NormalerTrumpf, SpezialTrumpf } from "./shared/trumpf";

export class CoiiffeurSpiel {
    constructor(
        public reihen: CoiffeurReihe[]
    ) {}
}

export class CoiffeurReihe {
    constructor(
        public readonly trumpf: Trumpf,
        public readonly multiplikator: number,
        public punkteTeamA: number | null,
        public punkteTeamB: number | null
    ) {}
}

export type Trumpf =
    NormalerTrumpf | SpezialTrumpf | 'Frei wählbar';