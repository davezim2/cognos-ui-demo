
import React, { useContext } from 'react';
import '../styles/landingpage.scss';
import axios from 'axios'
import { Context } from '../store/Store';
import { 
    Button,
    Header,
    HeaderName,
    Content,
    FormGroup,
    Stack,
    TextInput,
    Theme
} from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [state, dispatch] = useContext(Context)

    const fetchTenants = (key) => {
        axios.get('/tenants', { headers: 
            {
                'IBM-BA-Authorization': key,
                'Access-Control-Allow-Origin': 'true'
            }
        })
          .then((res) => {
              dispatch({type: "SET_TENANTLIST", payload: res.data.tenants})
              dispatch({type: "SET_FILTEREDLIST", payload: res.data.tenants})
          })
          .catch(console.log)
        return key
    }

    const getSessionID = () => {
        axios.put('/session', {
            "parameters": [
                {
                  "name": "CAMUsername",
                  "value": state.login.userID
                },
                {
                  "name": "CAMPassword",
                  "value": state.login.password
                }
              ]
        })
        .then((res) => fetchTenants(res.data.session_key))
        .then((res) => dispatch({type:'SET_SESSIONID', payload: res}))
        .catch(console.log)
    }


    return (
    
        <Theme>
            <Header aria-label="IBM Cognos Analytics">
                <HeaderName>
                    Cognos Analytics
                </HeaderName>
            </Header>
            <Content className="landingpage-container">
                <p>Log in with your Cognos User ID</p>
                <br />
                <FormGroup
                    legendText=""
                    style={{
                        maxWidth: '320px'
                    }}
                >
                    <Stack gap={6}>
                        <TextInput id="userid" labelText="User ID" value={state.login.userID} />
                        <TextInput.PasswordInput id="password" labelText="Password" value={state.login.password} />
                        <Link to="/home">
                            <Button className="login-button" onClick={getSessionID} renderIcon={ArrowRight}>Log in</Button>
                        </Link>
                    </Stack>
                </FormGroup>
            </Content>
        </Theme>

    )
};

export default LandingPage;