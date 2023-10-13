import { ReactNode } from 'react'
import { MultiSelect, MultiSelectProps } from '@mantine/core'
import { GREY_COLOR, LIME_COLOR } from '../../../constants'

type AllowedColors = 'Lime' | 'Grey'

interface MultiSelectStyleProps extends MultiSelectProps {
    color?: AllowedColors
    icon?: ReactNode
}

const MultiSelectStyle = ({ icon, color = 'Grey', ...prop }: MultiSelectStyleProps) => {
    return (
        <>
            <MultiSelect
                {...prop}
                icon={icon}
                w={300}
                searchable
                styles={(theme) => ({
                    input: {
                        backgroundColor: color === 'Lime' ? LIME_COLOR : GREY_COLOR,
                        borderColor: color === 'Lime' ? LIME_COLOR : GREY_COLOR,
                        color: color === 'Lime' ? '#111315' : '#FFFFFF',
                        '&::placeholder': {
                            color:
                                color === 'Lime'
                                    ? theme.fn.lighten('#111315', 0.5)
                                    : theme.fn.lighten('#FFFFFF', 0.9),
                            opacity: color === 'Lime' ? 1.5 : 0.4,
                        },
                    },
                })}
            />
        </>
    )
}

export default MultiSelectStyle
