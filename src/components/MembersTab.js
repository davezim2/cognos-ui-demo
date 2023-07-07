import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Modal, Button, Select, SelectItem } from '@carbon/react'

const MembersTab = () => {

    const ModalStateManager = ({
        renderLauncher: LauncherContent,
        children: ModalContent,
    }) => {

        const [open, setOpen] = useState(false);
        
        return (
            <>
                {!ModalContent || typeof document === 'undefined'
                    ? null
                    : ReactDOM.createPortal(
                    <ModalContent open={open} setOpen={setOpen} />,
                    document.body
                    )}
                {LauncherContent && <LauncherContent open={open} setOpen={setOpen} />}
            </>
        );
    };

    return (
        <ModalStateManager
            renderLauncher={({ setOpen }) => (
                <Button onClick={() => setOpen(true)}>Add Tenant</Button>
                )}>
                {({ open, setOpen }) => (
                <Modal
                    modalHeading="Add a tenant"
                    primaryButtonText="Add"
                    secondaryButtonText="Cancel"
                    open={open}
                    onRequestClose={() => setOpen(false)}>
                    <Select id="select-1" defaultValue="Tenant1" labelText="Tenant">
                        <SelectItem value="Tenant1" text="Tenant1" />
                    </Select>
                </Modal>
            )}
        </ModalStateManager>
    );
}

export default MembersTab