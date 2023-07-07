import { Content } from '@carbon/react';
import { Routes, Route } from 'react-router-dom';
import './styles/app.scss';
import Navigation from './components/Navigation';
import TenantList from './components/TenantList';
import LandingPage from './components/LandingPage';
import SubNav from './components/SubNav';
import TenantProfile from './components/TenantProfile';
import Welcome from './components/Welcome';


const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route index path="home/*" element= {
          <>
            <Navigation />
            <SubNav />
            <Content className="content--container">
              <Routes>
                <Route index element={<Welcome />} />
                <Route path="multitenancy" element={<TenantList />} />
                <Route path="tenantprofile" element={<TenantProfile />} />
              </Routes>
            </Content>
          </>
      } />
    
      </Routes>
      
    </>
  );
} 

export default App;