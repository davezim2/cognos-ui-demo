
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
    id: 'home-page',
    name: 'Home page',
    status: <Link>Default</Link>
    },
    {
    id: 'features',
    name: 'Features',
    status: <Link>Default</Link>
    },
    {
    id: 'themes',
    name: 'Themes',
    status: <Link>Default</Link>
    },
    {
    id: 'custom-folders',
    name: 'Custom folders',
    status: <Link>Default</Link>
    },
    {
    id: 'default-upload-location',
    name: 'Default upload location',
    status: <Link>Default</Link>
    },
    {
    id: 'parameters',
    name: 'Parameters',
    status: <Link>Settings</Link>
    }
];

const CustomizationTab = () => {
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

export default CustomizationTab