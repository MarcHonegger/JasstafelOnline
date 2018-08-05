import { NormalerTrumpf } from './shared/trumpf';

export class SchieberSpiel {
    constructor(
        public readonly mitMultiplikatoren: boolean,
        public gesamtPunkteTeamA: number,
        public gesamtPunkteTeamB: number,
        public Runden: SchieberRunde []
    ) {}
}

export class SchieberRunde {
    constructor (
        public readonly trumpf: NormalerTrumpf,
        public rundenPunkteTeamA: number,
        public rundenPunkteTeamB: number
    ) {}
}
