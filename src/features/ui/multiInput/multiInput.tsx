import { useState, useEffect } from 'react'
import { Flex, Text } from '@mantine/core'
import InputStyle from '../input/input'
import ButtonIconStyle from '../buttonIcon/buttonIcon'
import {
    IconSquareRoundedPlusFilled,
    IconSquareRoundedXFilled,
} from '@tabler/icons-react'
import { MultiInputsRow } from '../../../typings/filter'
import { DefaultRowFilter } from '../../../constants'

interface MultiInputProps {
    onChange?: (value: MultiInputsRow[]) => void
}

const MultiInput = ({ onChange }: MultiInputProps) => {
    const [rows, setRows] = useState<MultiInputsRow[]>([DefaultRowFilter])

    const handleAddRow = () => {
        const newRow: MultiInputsRow = {
            input1: '',
            input2: '',
        }
        setRows([...rows, newRow])
    }

    const handleDeleteRow = (index: number) => {
        const newRows = [...rows]
        newRows.splice(index, 1)
        setRows(newRows)
    }

    const handleChange = (index: number, field: keyof MultiInputsRow, value: string) => {
        const newRows = [...rows]
        newRows[index][field] = value
        setRows(newRows)
    }

    useEffect(() => {
        if (onChange) {
            onChange(rows)
        }
    }, [onChange, rows])

    return (
        <div>
            {rows.map((row, index) => (
                <div key={index} style={{ marginTop: '15px' }}>
                    <Flex align="center">
                        <div>
                            <InputStyle
                                placeholder="Input1"
                                value={row.input1}
                                onChange={(e) =>
                                    handleChange(index, 'input1', e.target.value)
                                }
                            />
                        </div>
                        <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                            <Text fz="md" color="#FFFFFF">
                                =
                            </Text>
                        </div>
                        <div>
                            <InputStyle
                                placeholder="Input2"
                                value={row.input2}
                                onChange={(e) =>
                                    handleChange(index, 'input2', e.target.value)
                                }
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
            ))}
        </div>
    )
}

export default MultiInput
