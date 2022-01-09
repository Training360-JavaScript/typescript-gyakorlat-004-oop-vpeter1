// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    {
        id: 1,
        name: 'Tom',
        sex: 'male',
        age: 35,
        health: 91,        
    },
    {
        id: 2,
        name: 'Zoe',
        sex: 'female',
        age: 28,
        health: 95,        
    },
    {
        id: 3,
        name: 'Danny',
        sex: 'male',
        age: 25,
        health: 93,        
    }

];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    {
        id: 1,
        name: 'Ornithopter',
        wings: 2,
        wheels: 0,
        clan: "Atreides", 
    },
    {
        id: 2,
        name: 'Trike',
        wings: 0,
        wheels: 3,
        clan: "Harkonnen", 
    },
    {
        id: 3,
        name: 'Deviator',
        wings: 0,
        wheels: 8,
        clan: "Ordos", 
    }
];
