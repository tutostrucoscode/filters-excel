import { IconGauge, IconFilterCode, IconLayoutColumns } from '@tabler/icons-react'
import { Routing } from '../typings/roting'
import { MultiInputsRow, SingleInputsRow, SingleInputsRowId } from '../typings/filter'

export const LIME_COLOR = '#D7FD52'
export const GREY_COLOR = '#3e3e3e'

export const CONTENT_TYPE = 'multipart/form-data'
export const URL_API = 'http://localhost:3001/'
export enum Path {
    Index = '/',
    Dashboard = '/dashboard',
    Filters = '/filters',
    Templates = '/templates',
}

export const Drawerdata: Routing[] = [
    {
        label: 'Dashboard',
        icon: IconGauge,
        link: '/dashboard',
    },
    {
        label: 'Filtros',
        icon: IconFilterCode,
        links: [{ label: 'Crear Filtro', link: '/filters' }],
    },
    {
        label: 'Templates',
        icon: IconLayoutColumns,
        links: [{ label: 'Crear Templates', link: '/templates' }],
    },
]

export const DefaultRowFilter: MultiInputsRow = {
    input1: '',
    input2: '',
}

export const DefaultRowFilterSigle: SingleInputsRow = {
    input: '',
}

export const DefaultRowFilterSigleId: SingleInputsRowId = {
    id: 1,
    input: '',
}
