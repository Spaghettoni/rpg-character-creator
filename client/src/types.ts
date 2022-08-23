export enum Race {
    HUMAN,
    ELF,
    ORC,
    DWARF
}

export type Character = {
    firstName: string,
    lastName: string,
    age: number,
    race: Race,
    bio: string,
}

export type User = {
    email: string,
    characters: Character[] | null
}