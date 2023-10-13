import { useState, useEffect } from 'react'
import { Flex } from '@mantine/core'
import InputStyle from '../input/input'
import ButtonIconStyle from '../buttonIcon/buttonIcon'
import { IconSquareRoundedPlusFilled, IconSquareRoundedXFilled } from '@tabler/icons-react'
import { SingleInputsRow } from '../../../typings/filter'
import { DefaultRowFilterSigle } from '../../../constants'
import SingleInputUi from './singleInputUi'

interface SingleInputProps {
    onChange?: (value: SingleInputsRow[]) => void
}

const SingleInput = ({ onChange }: SingleInputProps) => {
    const [rows, setRows] = useState<SingleInputsRow[]>([DefaultRowFilterSigle])

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

    useEffect(() => {
        if (onChange) {
            onChange(rows)
        }
    }, [onChange, rows])

    return (
        <>
            {rows.map((row, index) => (
                <SingleInputUi row={row} index={index} key={index} />
            ))}
        </>
    )
}

export default SingleInput
