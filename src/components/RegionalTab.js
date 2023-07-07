
import {
    DataTable,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
    TableExpandedRow,
    TableExpandHeader,
    TableExpandRow,
    TableContainer
  } from '@carbon/react';
import { Link } from 'react-router-dom';
import React from 'react'

const headers= [
    {
    header: 'Name',
    key: 'name'
    },
    {
    header: 'Status',
    key: 'status'
    }
];

const rows=[
    {
    id: 'timezone',
    name: 'Timezone',
    status: <Link>(GMT-05:00) United States Time (New York)</Link>
    },
    {
    id: 'product-language',
    name: 'Product Language',
    status: <Link>English</Link>
    },
    {
    id: 'content-language',
    name: 'Content Language',
    status: <Link>English</Link>
    },
    {
    id: 'bidirectional-language-support',
    name: 'Bidirectional language support',
    status: <Link>Default</Link>
    }
];

const RegionalTab = () => {
    return (
        <DataTable rows={rows} headers={headers}>
            {({ rows, headers, getTableProps, getHeaderProps, getRowProps, getTableContainerProps }) => (
                <TableContainer {...getTableContainerProps()}>
                    <Table {...getTableProps()}>
                        <TableHead>
                            <TableRow>
                                <TableExpandHeader />
                                    {headers.map((header, i) => (
                                        <TableHeader key={i} {...getHeaderProps({ header })}>
                                        {header.header}
                                        </TableHeader>
                                    ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <React.Fragment key={row.name}>
                                    <TableExpandRow {...getRowProps({ row })}>
                                        {row.cells.map((cell) => (
                                            <TableCell key={cell.name}>{cell.value}</TableCell>
                                        ))}
                                    </TableExpandRow>
                                    <TableExpandedRow
                                        colSpan={headers.length + 1}
                                        className="demo-expanded-td">
                                        <h6>Expandable row content</h6>
                                        <div>Description here</div>
                                    </TableExpandedRow>
                                </React.Fragment>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </DataTable>
    )
}

export default RegionalTab