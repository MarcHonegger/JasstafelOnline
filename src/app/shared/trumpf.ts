import { Trumpf } from '../coiffeur-spiel';

export type NormalerTrumpf = 'Schilten' | 'Eicheln' | 'Rosen' | 'Schellen';

export type SpezialTrumpf = 'Fünf Viertel' | 'Slalom' | 'Obenabe' | 'Uneufe' ;

export class MapTrümpfe {
    public mapping = new Map<Trumpf, string>([
        ['Schilten', 'https://upload.wikimedia.org/wikipedia/commons/b/b9/SchiltendeutschschweizerBlatt.jpg'],
        ['Rosen', 'https://upload.wikimedia.org/wikipedia/commons/e/e1/RosendeutschschweizerBlatt.svg'],
        ['Eicheln', 'https://upload.wikimedia.org/wikipedia/de/5/51/EichelndeutschschweizerBlatt2.svg'],
        ['Schellen', 'https://upload.wikimedia.org/wikipedia/commons/8/87/SchellendeutschschweizerBlatt.jpg']
    ]);
}
