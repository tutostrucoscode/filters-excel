import { InputHTMLAttributes, ReactNode } from 'react'
import { Input, InputProps } from '@mantine/core'
import { GREY_COLOR, LIME_COLOR } from '../../../constants'

type AllowedColors = 'Lime' | 'Grey'
interface InputStyleProps
    extends InputProps,
        Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    color?: AllowedColors
    icon?: ReactNode
}
const InputStyle = ({ icon, color = 'Grey', ...prop }: InputStyleProps) => {
    return (
        <Input
            {...prop}
            icon={icon}
            w={300}
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
    )
}

export default InputStyle
