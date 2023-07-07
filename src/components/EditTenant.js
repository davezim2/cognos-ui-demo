import React, { useState, useContext } from 'react';
import { Context } from '../store/Store';
import { Modal, TextInput } from '@carbon/react'
import axios from 'axios'


/*

TODO: 
- Add successful notification

"Successfully updated tenant
*/



const EditTenant = () => {
    const [state, dispatch] = useContext(Context)
    const [defaultName, setDefaultName] = useState('')

    let body = {
        "defaultName": defaultName
    }

    const editTenant = () => {
        axios.put(`/tenants?tenant_id=${state.editTenantForm.tenantID}`, body, {headers: state.auth})
            .then(fetchTenants)
            .catch(console.log)
    }

    const fetchTenants = () => {
        axios.get('/tenants', {headers: state.auth})
          .then((res) => {
              dispatch({type: "SET_TENANTLIST", payload: res.data.tenants})
              dispatch({type: "SET_FILTEREDLIST", payload: res.data.tenants})
              
          })
          .catch(console.log)
    }


    const closeEditForm = () => {
        dispatch({type:'SET_EDITTENANTMODALTOGGLE', payload: false})
        setDefaultName('')
    }


   
    return (
        <>
            <Modal
                modalHeading="Edit Tenant Name"
                open={state.editTenantModalOpen}
                primaryButtonText="Update"
                secondaryButtonText="Cancel"
                onRequestClose={() => closeEditForm()}
                onRequestSubmit={() =>
                    editTenant() &
                    closeEditForm()
                }
            >
                <TextInput
                    id="name"
                    type="text"
                    labelText="Name"
                    value={defaultName}
                    onChange={(e) => {setDefaultName(e.target.value)}}
                />
            </Modal>
        </>
    );
  }
  
  export default EditTenant;