/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { Box, Collapse, Group, ThemeIcon, UnstyledButton, Text } from '@mantine/core'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { useStyles } from './styles'
import { Links } from '../../../typings/roting'
import { useLocation } from 'react-router-dom'

interface LinksGroupProps {
    icon: React.FC<any>
    label: string
    initiallyOpened?: boolean
    link?: string
    links?: Links[]
}

const LinksGroup = ({
    icon: Icon,
    label,
    initiallyOpened,
    link,
    links,
}: LinksGroupProps) => {
    const location = useLocation()

    const { classes, theme } = useStyles()
    const hasLinks = Array.isArray(links)
    const shouldOpen = (hasLinks ? links : []).some(
        (link) => location.pathname === link.link
    )
    const [opened, setOpened] = useState(shouldOpen || initiallyOpened || false)
    const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft
    const items = (hasLinks ? links : []).map((link) => (
        <Text
            component="a"
            className={`${classes.link} ${
                location.pathname === link.link ? classes.linkActive : ''
            }`}
            href={link.link}
            key={link.label}
            color="#3e3e3e"
        >
            {link.label}
        </Text>
    ))

    return (
        <>
            <UnstyledButton
                onClick={() => {
                    if (!hasLinks) {
                        window.location.href = link || '/'
                    }
                    setOpened((o) => !o)
                }}
                className={`${classes.control} ${
                    location.pathname === link ? classes.linkActive2 : ''
                }`}
            >
                <Group position="apart" spacing={0} className={classes.text_color}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ThemeIcon bg={'#3e3e3e'} size={30}>
                            <Icon size="1.1rem" color="#D7FD52" />
                        </ThemeIcon>
                        <Box ml="md">{label}</Box>
                    </Box>

                    {hasLinks && (
                        <ChevronIcon
                            className={classes.chevron}
                            size="1rem"
                            stroke={1.5}
                            color="#D7FD52"
                            style={{
                                transform: opened
                                    ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)`
                                    : 'none',
                            }}
                        />
                    )}
                </Group>
            </UnstyledButton>
            {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
        </>
    )
}

export default LinksGroup
