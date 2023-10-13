import { useRef } from 'react'
import { Group, rem, Text, useMantineTheme } from '@mantine/core'
import { Dropzone, MIME_TYPES } from '@mantine/dropzone'
import { IconCloudUpload, IconDownload, IconX } from '@tabler/icons-react'
import ButtonStyle from '../button/button'
import { useStyles } from './styles'

interface Props {
    onDropAny?: (value: File) => void
    loading: boolean
}

const Dropzones = ({ onDropAny, loading }: Props) => {
    const openRef = useRef<() => void>(null)
    const theme = useMantineTheme()
    const { classes } = useStyles()

    // Esta función se llama cuando se carga un archivo
    const handleDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles && onDropAny) {
            onDropAny(acceptedFiles[0])
        }
    }

    return (
        <div className={classes.wrapper}>
            <Dropzone
                openRef={openRef}
                onDrop={() => {}}
                className={classes.dropzone}
                radius="md"
                accept={[MIME_TYPES.xls, MIME_TYPES.xlsx, MIME_TYPES.csv]}
                maxSize={30 * 1024 ** 2}
                onDropAny={handleDrop}
                maxFiles={1}
                loading={loading}
            >
                <div style={{ pointerEvents: 'none' }}>
                    <Group style={{ justifyContent: 'center' }}>
                        <Dropzone.Accept>
                            <IconDownload
                                style={{ width: rem(50), height: rem(50) }}
                                color={theme.colors.blue[6]}
                                stroke={1.5}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX
                                style={{ width: rem(50), height: rem(50) }}
                                color={theme.colors.red[6]}
                                stroke={1.5}
                            />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconCloudUpload
                                style={{ width: rem(50), height: rem(50) }}
                                stroke={1.5}
                            />
                        </Dropzone.Idle>
                    </Group>

                    <Text ta="center" fw={700} fz="lg" mt="xl">
                        <Dropzone.Accept>Suelta archivos aquí</Dropzone.Accept>
                        <Dropzone.Reject>
                            Archivo xls,xlsx de menos de 30mb
                        </Dropzone.Reject>
                        <Dropzone.Idle>Subir Tablas</Dropzone.Idle>
                    </Text>
                    <Text ta="center" fz="sm" mt="xs" c="dimmed">
                        Drag&apos;n&apos;los archivos aquí para cargarlos. Sólo podemos
                        aceptar <i>.xls, .xlsx</i> archivos de menos de 30 MB de tamaño.
                    </Text>
                </div>
            </Dropzone>

            <ButtonStyle
                size="md"
                radius="xl"
                onClick={() => openRef.current?.()}
                color="Lime"
                className={classes.control}
                display={loading ? 'none' : undefined}
            >
                Selecciona archivos
            </ButtonStyle>
        </div>
    )
}

export default Dropzones
