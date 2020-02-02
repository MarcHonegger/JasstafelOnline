import { Trumpf } from '../coiffeur-spiel';

export type NormalerTrumpf = 'Schilten' | 'Eicheln' | 'Rosen' | 'Schellen';

export type SpezialTrumpf = 'Fünf Viertel' | 'Slalom' | 'Obenabe' | 'Uneufe' ;

export class MapTrümpfe {
    public mapping = new Map<Trumpf, string>([
        ['Eicheln', ''],
        ['Rosen', ''],
        ['Schellen', ''],
        ['Schilten', ''],
        ['Obenabe', ''],
        ['Uneufe', '']
    ]);
}
