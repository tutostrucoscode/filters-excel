import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Button, ButtonProps } from '@mantine/core'
import { GREY_COLOR, LIME_COLOR } from '../../../constants'

type AllowedColors = 'Lime' | 'Grey'

interface ButtonStyleProps extends ButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    color?: AllowedColors
}
const ButtonStyle = ({ children, color = 'Grey', ...prop }: ButtonStyleProps) => {
    return (
        <Button
            {...prop}
            styles={(theme) => ({
                root: {
                    backgroundColor: color === 'Lime' ? LIME_COLOR : GREY_COLOR,
                    color: color === 'Lime' ? '#111315' : '#FFFFFF',
                    ':hover': {
                        backgroundColor:
                            color === 'Lime'
                                ? theme.fn.lighten(LIME_COLOR, 0.5)
                                : theme.fn.lighten(GREY_COLOR, 0.5),
                    },
                },
            })}
        >
            <span>{children}</span>
        </Button>
    )
}

export default ButtonStyle
