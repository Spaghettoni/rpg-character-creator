export const Race: {
    HUMAN: 'HUMAN'
    ELF: 'ELF'
    ORC: 'ORC'
    DWARF: 'DWARF'
} = {
    HUMAN: 'HUMAN',
    ELF: 'ELF',
    ORC: 'ORC',
    DWARF: 'DWARF'
}

export type RaceType = typeof Race[keyof typeof Race]