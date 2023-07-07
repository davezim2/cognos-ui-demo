import React, { useState, useContext } from 'react';
import { Context } from '../store/Store';
import { Modal, TextInput } from '@carbon/react'
import axios from 'axios'


/*

TODO: 
- Add successful notification

"Successfully created "name" tenant
*/



const AddTenant = () => {
    const [state, dispatch] = useContext(Context)
    const [name, setName] = useState("")
    const [tenID, setID] = useState("")

    let body = {
        "defaultName": name,
        "disabled": true,
        "tenantID": tenID
    }

    const fetchTenants = () => {
        axios.get('/tenants', {headers: state.auth})
          .then((res) => {
              dispatch({type: "SET_TENANTLIST", payload: res.data.tenants})
              dispatch({type: "SET_FILTEREDLIST", payload: res.data.tenants})
          })
          .catch(console.log)
    }


    const closeForm = () => {
        dispatch({type:'SET_ADDTENANTMODALTOGGLE', payload: false})
        setName('')
        setID('')
    }

    const addTenant = () => {
        axios.post('/tenants', body, {headers: state.auth})
            .then((res) => {
                if (res.status === 201) dispatch({type:'SET_SUCCESSNOTIFICATION', payload: true})
            })
            .then(fetchTenants)
            .catch(console.log)
    }

   
    return (
        <>
            <Modal
                modalHeading="Add a tenant"
                open={state.addTenantModalOpen}
                primaryButtonText="Add"
                secondaryButtonText="Cancel"
                onRequestClose={() => closeForm()}
                onRequestSubmit={() =>
                    addTenant() &
                    closeForm()
                }
            >
                <TextInput
                    id="name"
                    type="text"
                    labelText="Name"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />
                <br />
                <TextInput
                    id="tenant-id"
                    type="text"
                    labelText="Tenant ID"
                    value={tenID}
                    onChange={(e) => {setID(e.target.value)}}
                />
            </Modal>
        </>
    );
  }
  
  export default AddTenant;