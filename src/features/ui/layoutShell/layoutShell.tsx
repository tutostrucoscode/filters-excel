import { Code, Container, Flex, Group, Navbar, ScrollArea, Title } from '@mantine/core'
import React from 'react'
import { useStyles } from './styles'
import { Drawerdata } from '../../../constants'
import LinksGroup from '../linksGroup/linksGroup'

interface Props {
    children: React.ReactNode
    container?: boolean
    title?: string
}

const LayoutShell = ({ children, container = true, title = '' }: Props) => {
    const WIDTH_NAVBAR = '300px'
    const WIDTH_CONTAINER = `${300 - 17}px`

    const { classes } = useStyles()
    const links = Drawerdata.map((item) => <LinksGroup {...item} key={item.label} />)

    return (
        <>
            <Flex>
                <div>
                    <Navbar
                        height="100vh"
                        width={{ sm: WIDTH_NAVBAR }}
                        p="md"
                        className={classes.navbar}
                    >
                        <Navbar.Section className={classes.header}>
                            <Group position="apart">
                                {/* <Logo width={rem(120)} /> */}
                                <Title order={2} c={'#FFFFFF'}>
                                    ExcelFilterPro
                                </Title>
                            </Group>
                        </Navbar.Section>

                        <Navbar.Section
                            grow
                            className={classes.links}
                            component={ScrollArea}
                        >
                            <div className={classes.linksInner}>{links}</div>
                        </Navbar.Section>

                        <Navbar.Section className={classes.footer}>
                            <Code sx={{ fontWeight: 700 }}>v1.0.0</Code>
                        </Navbar.Section>
                    </Navbar>
                </div>
                <div
                    style={{
                        width: `calc(100vw - ${WIDTH_NAVBAR})`,
                        position: 'relative',
                        left: WIDTH_CONTAINER,
                    }}
                >
                    {container ? (
                        <Container py="md" size="90rem">
                            {title && title.length > 0 && (
                                <div>
                                    <Title order={1} c={'#FFFFFF'} mb="20px">
                                        {title}
                                    </Title>
                                </div>
                            )}
                            {children}
                        </Container>
                    ) : (
                        <>
                            {title && title.length > 0 && (
                                <div>
                                    <Title order={1} c={'#FFFFFF'} mb="20px">
                                        {title}
                                    </Title>
                                </div>
                            )}
                            {children}
                        </>
                    )}
                </div>
            </Flex>
        </>
    )
}

export default LayoutShell
