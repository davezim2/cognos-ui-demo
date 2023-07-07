import '../styles/welcome.scss';
import { Button, Theme } from '@carbon/react'



const Welcome = () => {

    return (
        
        <Theme className="welcome--container">
            <h2>Welcome to Cognos Analytics</h2>
            <br />
            <p>Leverage self-service analytics to make more confident decisions.</p>
            <br />
            <Button>Get Started</Button>
        </Theme>
        
    )

}
  
  export default Welcome;