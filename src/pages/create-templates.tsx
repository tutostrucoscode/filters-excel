import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IconFilterSearch } from '@tabler/icons-react'
import LayoutShell from '../features/ui/layoutShell/layoutShell'
import { IFormTemplateInput } from '../typings/forms'
import InputStyle from '../features/ui/input/input'
import { Divider, Group, Paper } from '@mantine/core'
import ButtonStyle from '../features/ui/button/button'
import { DefaultRowFilterSigle } from '../constants'
import SingleInput from '../features/ui/singleInput/singleInput'

const CreateTemplates = () => {
    const { control, handleSubmit } = useForm<IFormTemplateInput>({
        defaultValues: {
            templateName: '',
            columnsName: [DefaultRowFilterSigle],
        },
    })
    const onSubmit: SubmitHandler<IFormTemplateInput> = (data) => {
        console.log('onSubmit: ', data)
    }
    return (
        <LayoutShell title="Crear Template">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Controller
                        name="templateName"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <InputStyle
                                {...field}
                                placeholder="Nombre template"
                                color="Grey"
                                icon={<IconFilterSearch color="#D7FD52" />}
                            />
                        )}
                    />
                    <div style={{ marginTop: '20px' }}>
                        <Paper shadow="sm" p="lg" bg={'#1A1D1F'}>
                            <Controller
                                name="columnsName"
                                control={control}
                                render={({ field }) => <SingleInput {...field} />}
                            />
                        </Paper>
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
                </div>
            </form>
        </LayoutShell>
    )
}

export default CreateTemplates
