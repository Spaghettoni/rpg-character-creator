export enum Race {
    HUMAN = 'HUMAN',
    ELF = 'ELF',
    ORK = 'ORK',
    DWARF = 'DWARF'
}

export type Character = {
    id?: number;
    firstName: string,
    lastName: string,
    age: number,
    race: Race,
    bio: string,
}

export type User = {
    id: number,
    email: string,
    characters: Character[]
}