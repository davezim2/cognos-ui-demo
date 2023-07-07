import { RadioButtonGroup, RadioButton, TextInput} from "@carbon/react"

const NotificationsTab = () => {
    return (

        <RadioButtonGroup
            defaultSelected="default-selected"
            name="radio-button-group"
            valueSelected="default-selected"
        orientation='vertical' labelPosition='right'>
            <RadioButton
            id="radio-1"
            labelText="Default Sender"
            value="standard"
            />
                <div
                style={{
                    width: 300
                }}
                >
                <TextInput
                    className="input-test-class"
                    id="text-input-1"
                    onChange={function noRefCheck(){}}
                    onClick={function noRefCheck(){}}
                    value="notications@cognos.ibm.com"
                    readOnly
                    playgroundWidth={300}
                    size="md"
                    type="text"
                />
                </div>
            <br ></br>
            <RadioButton
            id="radio-2"
            labelText="Tenant Sender"
            value="default-selected"
            />
            <div
            style={{
                width: 300
            }}
            >
            <TextInput
                className="input-test-class"
                id="text-input-1"
                onChange={function noRefCheck(){}}
                onClick={function noRefCheck(){}}
                placeholder="Enter sender email address"
                playgroundWidth={300}
                size="md"
                type="text"
            />
            </div>
        </RadioButtonGroup>

    )
};

export default NotificationsTab