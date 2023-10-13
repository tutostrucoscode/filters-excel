import { MultiInputsRow, SingleInputsRow } from './filter'

export interface IFormInput {
    isActiveFiltre: string
    filterName: string
    newColumnName: string
    productFilter: string[]
    multiInput: MultiInputsRow[]
    singleInput: SingleInputsRow[]
}

export interface IFormTemplateInput {
    templateName: string
    columnsName: SingleInputsRow[]
}
