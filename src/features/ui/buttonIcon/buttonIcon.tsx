/* eslint-disable @typescript-eslint/no-unused-vars */
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ActionIcon, ActionIconProps } from '@mantine/core'

type AllowedColors = 'Lime' | 'Grey'
interface ButtonIconStyleProps
    extends ActionIconProps,
        ButtonHTMLAttributes<HTMLButtonElement> {
    color?: AllowedColors
    children: ReactNode
}

const ButtonIconStyle = ({ children, color = 'Grey', ...prop }: ButtonIconStyleProps) => {
    return (
        <>
            <ActionIcon {...prop} variant="transparent">
                {children}
            </ActionIcon>
        </>
    )
}

export default ButtonIconStyle
