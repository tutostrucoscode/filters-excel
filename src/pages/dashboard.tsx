/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Title } from '@mantine/core'
import LayoutShell from '../features/ui/layoutShell/layoutShell'
import axios from 'axios'
import { useState } from 'react'
import Dropzones from '../features/ui/dropzones/dropzones'
import DataGrid from '../features/ui/dataGrid/dataGrid'
import { URL_API } from '../constants'
import ButtonStyle from '../features/ui/button/button'
import { TableRow } from '../typings/tableRow'

const Dashboard = () => {
    const [file, setFile] = useState<File | null>(null)
    const [fileJson, setFileJson] = useState<TableRow[]>([])
    const [loading, setLoading] = useState(false)

    const handleFileUpload = (event: File | null) => {
        if (event) {
            setFile(event)
            const formData = new FormData()
            formData.append('file', event)
            setLoading(true)

            axios
                .post(URL_API + 'convertArray', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((response) => {
                    const dataRows = response.data
                    setFileJson(dataRows.data)
                    console.log(dataRows.data)
                })
                .catch(console.error)
                .finally(() => setLoading(false))
        }
    }

    const handleClearFileUpload = () => {
        setFile(null)
        setFileJson([])
    }

    return (
        <LayoutShell container={true}>
            <>
                {fileJson.length <= 0 ? (
                    <Flex align="baseline" justify="center" mt="20px">
                        <>
                            <Dropzones
                                onDropAny={handleFileUpload}
                                loading={file !== null}
                            />
                        </>
                    </Flex>
                ) : (
                    <>
                        <Flex align="baseline" justify="space-between" mt="20px">
                            <Title order={2} fz="md" ml="lg" style={{ color: 'white' }}>
                                {file ? `Archivo: ${file.name}` : null}
                            </Title>
                            <ButtonStyle onClick={handleClearFileUpload}>
                                Importar nuevo
                            </ButtonStyle>
                        </Flex>
                    </>
                )}

                <div style={{ marginTop: '50px' }}>
                    <DataGrid
                        data={fileJson}
                        loading={loading}
                        actionOptions={undefined}
                        tableInstanceRef={undefined}
                    />
                </div>
            </>
        </LayoutShell>
    )
}

export default Dashboard
