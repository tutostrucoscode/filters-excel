import { Flex } from '@mantine/core'
import InputStyle from '../input/input'
import ButtonIconStyle from '../buttonIcon/buttonIcon'
import { IconSquareRoundedPlusFilled, IconSquareRoundedXFilled } from '@tabler/icons-react'
import { SingleInputsRowId } from '../../../typings/filter'

interface Props {
    row: SingleInputsRowId
    index: number
    key?: React.Key | null | undefined
}

const SingleInputUi = ({ row, index, key }: Props) => {
    const handleAddRow = () => {
        const newRow: SingleInputsRow = {
            input: '',
        }
        setRows([...rows, newRow])
    }

    const handleDeleteRow = (index: number) => {
        const newRows = [...rows]
        newRows.splice(index, 1)
        setRows(newRows)
    }

    const handleChange = (index: number, field: keyof SingleInputsRow, value: string) => {
        const newRows = [...rows]
        newRows[index][field] = value
        setRows(newRows)
    }
    return (
        <div key={key} style={{ marginTop: '15px' }}>
            <Flex align="center">
                <div>
                    <InputStyle
                        placeholder="Input"
                        value={row.input}
                        onChange={(e) => handleChange(index, 'input', e.target.value)}
                    />
                </div>
                <div style={{ marginLeft: '10px' }}>
                    {index === rows.length - 1 ? (
                        <ButtonIconStyle onClick={handleAddRow}>
                            <IconSquareRoundedPlusFilled />
                        </ButtonIconStyle>
                    ) : (
                        <ButtonIconStyle onClick={() => handleDeleteRow(index)}>
                            <IconSquareRoundedXFilled />
                        </ButtonIconStyle>
                    )}
                </div>
            </Flex>
        </div>
    )
}

export default SingleInputUi
