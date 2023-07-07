import { TextInput } from '@carbon/react'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';
import { Table, TableRow, TableBody, TableCell, OverflowMenu, OverflowMenuItem } from '@carbon/react';
import { useContext } from 'react';
import { Context } from '../store/Store';
import axios from 'axios';
import CustomizationTab from './CustomizationTab'
import RegionalTab from './RegionalTab'
// import MembersTab from './MembersTab'
import NotificationsTab from './NotificationsTab'

const ProfileTabs = () => {

    const [state, dispatch] = useContext(Context)

    const fetchTenants = () => {
        axios.get('/tenants', {headers: state.auth})
            .then((res) => {
                dispatch({type: "SET_TENANTLIST", payload: res.data.tenants})
            })
            .catch(console.log)
    }

    const deleteTenant = (id) => {
        axios.delete(`/tenants?tenant_id=${id}`, {headers: state.auth})
            .then(fetchTenants)
            .catch(console.log)
    }

    return (
        <Tabs>
            <TabList aria-label="List of tabs">
                <Tab>General</Tab>
                <Tab>Customization</Tab>
                <Tab>Regional</Tab>
                <Tab>Members</Tab>
                <Tab>Notications</Tab>
            </TabList>
        <TabPanels>
            <TabPanel>
                <br />
                <div
                style={{
                    width: 300
                }}
                >
                <TextInput
                    className="input-test-class"
                    id="text-input-1"
                    labelText="Tenant Description"
                    onChange={function noRefCheck(){}}
                    onClick={function noRefCheck(){}}
                    placeholder="Input text"
                    playgroundWidth={300}
                    size="md"
                    type="text"
                />
                </div>
                <br />
                <div
                style={{
                    width: 300
                }}
                >
                <TextInput
                    className="input-test-class"
                    id="text-input-1"
                    labelText="Search Path"
                    onChange={function noRefCheck(){}}
                    onClick={function noRefCheck(){}}
                    placeholder="Input field"
                    playgroundWidth={300}
                    size="md"
                    type="text"
                />
                </div>
                <br />
                <div
                style={{
                    width: 300
                }}
                >
                <TextInput
                    className="input-test-class"
                    id="text-input-1"
                    labelText="ID"
                    onChange={function noRefCheck(){}}
                    onClick={function noRefCheck(){}}
                    placeholder="Input field"
                    playgroundWidth={300}
                    size="md"
                    type="text"
                />
                </div>
                <br />
                <Table size="md">
                    <TableBody className="tenant-table-body">
                        {state.tenants.length ? state.tenants.map((tenant, i) => {
                            return <TableRow
                                        className='tenant-table-row'
                                        // onClick=""
                                        key={i}
                                    >
                                <TableCell className='tenant-table-cell'>{tenant.defaultName}</TableCell>
                                <TableCell align="right">{tenant.modificationTime}</TableCell>
                                <TableCell align="right">
                                    <OverflowMenu
                                        flipped
                                    >
                                        <OverflowMenuItem itemText="Delete Tenant" onClick={() => deleteTenant(tenant.tenantID)}/>
                                        <OverflowMenuItem itemText="Edit Tenant" />
                                    </OverflowMenu>
                                </TableCell>
                            </TableRow>
                        }) : null }
                    </TableBody>
                </Table>
            </TabPanel>
            <TabPanel>
                <CustomizationTab />
            </TabPanel>
            <TabPanel>
                <RegionalTab />
            </TabPanel>
            <TabPanel>
                {/* <MembersTab /> */}
            </TabPanel>
            <TabPanel>
                <NotificationsTab />
            </TabPanel>
        </TabPanels>
        </Tabs>
    );
}

export default ProfileTabs;