export interface SearchCards {
  data: Datum[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

export interface Datum {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level: string;
  hp: string;
  types: string[];
  evolvesFrom: string;
  abilities: Ability[];
  attacks: Attack[];
  weaknesses: Resistance[];
  resistances: Resistance[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  flavorText: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities;
  images: DatumImages;
  tcgplayer: Tcgplayer;
}

export interface Ability {
  name: string;
  text: string;
  type: string;
}

export interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface DatumImages {
  small: string;
  large: string;
}

export interface Legalities {
  unlimited: string;
}

export interface Resistance {
  type: string;
  value: string;
}

export interface Set {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: SetImages;
}

export interface SetImages {
  symbol: string;
  logo: string;
}

export interface Tcgplayer {
  url: string;
  updatedAt: string;
  prices: Prices;
}

export interface Prices {
  holofoil: Holofoil;
}

export interface Holofoil {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: null;
}
