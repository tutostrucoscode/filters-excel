export interface ListRelationFilter {
    id: number
    relation: ObjectRelationFilter
}

interface ObjectRelationFilter {
    [key: string]: string
}

export interface SingleInputsRowId {
    id: number
    input: string
}

export interface SingleInputsRow {
    input: string
}

export interface MultiInputsRow {
    input1: string
    input2: string
}
