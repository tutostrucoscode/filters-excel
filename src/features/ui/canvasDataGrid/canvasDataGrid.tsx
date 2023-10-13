import React from 'react'
import 'canvas-datagrid'
import { Box, Group, ScrollArea } from '@mantine/core'
interface IProps {
    data: string // Datos para renderizar, cadena JSON
}

const CanvasDataGrid: React.FC<IProps> = ({ data }: IProps) => {
    return (
        <Group position="center" mih={100}>
            <ScrollArea
                type="always"
                offsetScrollbars
                styles={() => ({
                    root: {
                        width: '100%',
                        minHeight: '7.25rem',
                    },
                    scrollbar: {
                        '&, &:hover': {
                            background: '#3e3e3e',
                        },

                        '&[data-orientation="vertical"] .mantine-ScrollArea-thumb': {
                            cursor: 'grab',
                            backgroundColor: '#D7FD52',
                        },

                        '&[data-orientation="horizontal"] .mantine-ScrollArea-thumb': {
                            cursor: 'grab',
                            backgroundColor: '#D7FD52',
                        },
                    },
                })}
            >
                <Box w={2000}>
                    {React.createElement('canvas-datagrid', {
                        data,
                    })}
                </Box>
            </ScrollArea>
        </Group>
    )
}

export default CanvasDataGrid
