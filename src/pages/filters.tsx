import { useState } from 'react'
import { Chip, Divider, Group, Paper, Tabs } from '@mantine/core'
import { IconBaseline, IconColorFilter, IconFilterSearch } from '@tabler/icons-react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import LayoutShell from '../features/ui/layoutShell/layoutShell'
import ButtonStyle from '../features/ui/button/button'
import InputStyle from '../features/ui/input/input'
import { DefaultRowFilter, DefaultRowFilterSigle, LIME_COLOR } from '../constants'
import MultiSelectStyle from '../features/ui/multiSelect/multiSelect'
import MultiInput from '../features/ui/multiInput/multiInput'
import SingleInput from '../features/ui/singleInput/singleInput'
import { IFormInput } from '../typings/forms'

const Filters = () => {
    const { control, handleSubmit } = useForm<IFormInput>({
        defaultValues: {
            isActiveFiltre: 'isActiveFiltre',
            filterName: '',
            newColumnName: '',
            productFilter: [''],
            multiInput: [DefaultRowFilter],
            singleInput: [DefaultRowFilterSigle],
        },
    })

    const [activeTab, setActiveTab] = useState<string | null>('first')

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log('onSubmit: ', data)
    }

    return (
        <LayoutShell title="Crear Filtros">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Controller
                        name="isActiveFiltre"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Chip.Group {...field}>
                                <Group>
                                    <Chip
                                        value="active"
                                        variant="filled"
                                        color="teal"
                                        radius="sm"
                                        styles={{
                                            label: {
                                                backgroundColor: '#1A1D1F',
                                                color: 'white',
                                                ':hover': {
                                                    backgroundColor: '#3e3e3e',
                                                },
                                            },
                                        }}
                                    >
                                        Filtro Activo
                                    </Chip>
                                    <Chip
                                        value="disable"
                                        variant="filled"
                                        color="red"
                                        radius="sm"
                                        styles={{
                                            label: {
                                                backgroundColor: '#1A1D1F',
                                                color: 'white',
                                                ':hover': {
                                                    backgroundColor: '#3e3e3e',
                                                },
                                            },
                                        }}
                                    >
                                        Filtro Inactivo
                                    </Chip>
                                </Group>
                            </Chip.Group>
                        )}
                    />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Controller
                        name="filterName"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <InputStyle
                                {...field}
                                placeholder="Nombre filtro"
                                color="Grey"
                                icon={<IconFilterSearch color="#D7FD52" />}
                            />
                        )}
                    />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Controller
                        name="newColumnName"
                        control={control}
                        render={({ field }) => (
                            <InputStyle
                                {...field}
                                placeholder="Nombre columna nueva"
                                color="Grey"
                                icon={<IconBaseline color="#D7FD52" />}
                            />
                        )}
                    />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Controller
                        name="productFilter"
                        control={control}
                        render={({ field }) => (
                            <MultiSelectStyle
                                {...field}
                                data={['Rugs', 'Lighting', 'Bath']}
                                icon={<IconColorFilter color="#D7FD52" />}
                                placeholder="Filtro producto"
                            />
                        )}
                    />
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Tabs
                        value={activeTab}
                        onTabChange={setActiveTab}
                        styles={{
                            tabLabel: { color: LIME_COLOR },
                            tab: { '&:hover': { backgroundColor: '#3e3e3e' } },
                        }}
                    >
                        <Tabs.List>
                            <Tabs.Tab value="first">Filtro tipo A</Tabs.Tab>
                            <Tabs.Tab value="second">Filtro tipo B</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="first">
                            <Paper shadow="sm" p="lg" bg={'#1A1D1F'}>
                                <Controller
                                    name="multiInput"
                                    control={control}
                                    render={({ field }) => <MultiInput {...field} />}
                                />
                            </Paper>
                        </Tabs.Panel>
                        <Tabs.Panel value="second">
                            <Paper shadow="sm" p="lg" bg={'#1A1D1F'}>
                                <Controller
                                    name="singleInput"
                                    control={control}
                                    render={({ field }) => <SingleInput {...field} />}
                                />
                            </Paper>
                        </Tabs.Panel>
                    </Tabs>
                </div>
                <Divider my="xl" />
                <div style={{ marginTop: '20px' }}>
                    <Group>
                        <ButtonStyle type="submit" color="Lime" compact uppercase>
                            Guardar
                        </ButtonStyle>
                        <ButtonStyle compact uppercase>
                            Cancelar
                        </ButtonStyle>
                    </Group>
                </div>
            </form>
        </LayoutShell>
    )
}

export default Filters
