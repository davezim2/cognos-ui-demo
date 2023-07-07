import { useContext, useEffect} from 'react';
import { Context } from '../store/Store';
import axios from 'axios';
import '../styles/tenants.scss';
import { 
    DataTable,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
    OverflowMenu, 
    OverflowMenuItem } from '@carbon/react';


const Tenants = () => {
    const [state, dispatch] = useContext(Context)

    const fetchTenants = () => {
        axios.get('/tenants', {headers: state.auth})
          .then((res) => {
              dispatch({type: "SET_TENANTLIST", payload: res.data.tenants})
              dispatch({type: "SET_FILTEREDLIST", payload: res.data.tenants})

          })
          .catch(console.log)
    }

    const deleteTenant = (id) => {
        axios.delete(`/tenants?tenant_id=${id}`, {headers: state.auth})
            .then(fetchTenants)
            .catch(console.log)
    }

    const openEditModal = (name, id) => {
        dispatch({type:'SET_EDITTENANTMODALTOGGLE', payload: true})
        dispatch({type:'SET_EDITTENANTFORM', payload: {defaultName: name, tenantID: id}})
    }

    const formatDate = (entry) => {
        let newDate = ''
        
        let month = entry.slice(5, 7)
        let day = entry.slice(8, 10)
        let year = entry.slice(0, 4)
        let date = `${month}/${day}/${year}`

        let hour = entry.slice(11, 13)
        let minutes = entry.slice(14, 16)
        let AmOrPm = hour >= 12 ? 'PM' : 'AM';
        hour = (hour % 12) || 12;
        
        
        newDate = date + ' ' + hour + ':' + minutes + ' ' + AmOrPm
        return newDate
    }



    const headers = [
        {
            key: 'name',
            header: 'Name',
        },
        {
            key: 'status',
            header: 'Status',
        },
    ];

    return (
        // <DataTable>
            <Table size="md">
                <TableBody className="tenant-table-body">
                    {state.filteredTenants.length ? state.filteredTenants.map((tenant, i) => {
                        return <TableRow
                                    className='tenant-table-row'
                                    // onClick=""
                                    key={i}
                                >
                            <TableCell className='tenant-table-cell'>{tenant.defaultName}</TableCell>
                            <TableCell align="right">{formatDate(tenant.modificationTime)}</TableCell>
                            <TableCell align="right">
                                <OverflowMenu
                                    flipped
                                >
                                    <OverflowMenuItem itemText="Delete Tenant" onClick={() => deleteTenant(tenant.tenantID)}/>
                                    <OverflowMenuItem itemText="Edit Tenant" onClick={() => openEditModal(tenant.defaultName, tenant.tenantID)}/>
                                </OverflowMenu>
                            </TableCell>
                        </TableRow>
                    }) : null }
                </TableBody>
            </Table>
        // </DataTable>
    );
  }
  
  export default Tenants;