import { TablerIconsProps } from '@tabler/icons-react'

export interface Routing {
    label: string
    icon: (props: TablerIconsProps) => JSX.Element
    link?: string
    links?: Links[]
}

export interface Links {
    label: string
    link: string
}
