import { useContext } from 'react';
import { Context } from '../store/Store';
import { Link, Outlet } from 'react-router-dom';
import '../styles/subnav.scss';
import { 
    SideNav,
    SideNavItems,
    SideNavLink,
    SwitcherDivider,
} from '@carbon/react';
import {
    User,
    TaskApproved,
    DataBase,
    Tools,
    Events,
    UserMultiple
} from '@carbon/icons-react'


const SubNav = () => {
    const [state] = useContext(Context)

    return (
        <SideNav
            className="navigation--subnav"
            expanded={state.isSubNavExpanded}
            isPersistent={false}
            aria-label="Sub nav"
        >
            <SideNavItems>
                <SideNavLink renderIcon={User}>
                    People
                </SideNavLink>
                <SwitcherDivider />
                <SideNavLink renderIcon={TaskApproved}>
                    Licenses
                </SideNavLink>
                <SwitcherDivider />
                <SideNavLink renderIcon={DataBase}>
                    Data server connections
                </SideNavLink>
                <SwitcherDivider />
                <SideNavLink renderIcon={Tools}>
                    Customization
                </SideNavLink>
                <SwitcherDivider />
                <SideNavLink renderIcon={UserMultiple}>
                    <Link to="/home/multitenancy">
                        Multitenancy
                    </Link> 
                </SideNavLink>
                <SwitcherDivider />
                <SideNavLink renderIcon={Events}>
                    Collaboration
                </SideNavLink>
            </SideNavItems>
            <Outlet />
        </SideNav>
    );

  }
  
  export default SubNav;