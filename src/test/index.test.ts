// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import {boucle2} from '../index';

describe('La fonction boucle2 doit retourner', () => {
    test('1 étoile', () => {
        expect(boucle2(1)).toEqual("*\n");
    });

    test('3x3 étoiles', () => {
        expect(boucle2(3)).toEqual("***\n***\n***\n");
    });

    test('5x5 étoiles', () => {
        expect(boucle2(5)).toEqual("*****\n*****\n*****\n*****\n*****\n");
    });
});
