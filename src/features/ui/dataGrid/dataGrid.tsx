import { useMemo } from 'react'
import ReactTableUI, { ActionOptions, TableInstance } from 'react-table-ui'
import { TableRow } from '../../../typings/tableRow'

interface TableProps {
    data: TableRow[]
    loading: boolean
    actionOptions: ActionOptions<TableRow> | undefined
    tableInstanceRef: React.RefObject<TableInstance<TableRow>> | undefined
}
const DataGrid = ({ data, loading, actionOptions, tableInstanceRef }: TableProps) => {
    const dataRow: TableRow[] = useMemo(() => data, [data])
    return (
        <div
            style={{
                height: '88vh',
                overflow: 'hidden',
                padding: '20px',
            }}
        >
            <ReactTableUI
                title="Tabla"
                data={dataRow}
                tableInstanceRef={tableInstanceRef}
                loadingOptions={{ loading }}
                actionOptions={actionOptions}
            />
        </div>
    )
}

export default DataGrid
