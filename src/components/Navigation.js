import { useContext, useEffect } from 'react';
import { Context } from '../store/Store';
import '../styles/navigation.scss';
import { Link } from 'react-router-dom';
import { 
    Header,
    HeaderName,
    HeaderMenuButton,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SideNav,
    SideNavItems,
    SideNavLink,
    SwitcherDivider,
    InlineNotification,
    Theme
} from '@carbon/react';

import { 
    Search, 
    Help, 
    Notification, 
    UserAvatarFilled, 
    Home,
    Add,
    Upload,
    Folder,
    UserAdmin,
    Time
} from '@carbon/icons-react';


const Navigation = () => {
    const [state, dispatch] = useContext(Context)

    const expandSideNav = () => {
        if (!state.isSideNavExpanded && !state.isSubNavExpanded) dispatch({ type: "SET_SIDENAV", payload: true });
        else if (state.isSideNavExpanded && !state.isSubNavExpanded) dispatch({ type: "SET_SIDENAV", payload: false })
        else if (state.isSubNavExpanded && !state.isSideNavExpanded) dispatch({ type: "SET_SUBNAV", payload: false })
    }

    const expandSubNav = () => {
        dispatch({ type: "SET_SIDENAV", payload: false })
        dispatch({ type: "SET_SUBNAV", payload: true })
    }

    const closeNavs = () =>{
        dispatch({ type: "SET_SIDENAV", payload: false })
        dispatch({ type: "SET_SUBNAV", payload: false })
    }

    const navDiv = document.querySelector('.navigation--sidenav')
    const subnavDiv = document.querySelector('.navigation--subnav')
    // document.addEventListener('mousedown', closeNavs)


    return (
        <>
            <Theme theme="g100">
                { state.successNotification ? 
                    <InlineNotification
                    className="addtenant--notification"
                    title="Successfully created tenant"
                    kind="success"
                /> : null }
                <Header aria-label="IBM Cognos Analytics" className="nav--header">
                    <HeaderMenuButton
                        isCollapsible
                        aria-label="Open Menu"
                        isActive={state.isSideNavExpanded || state.isSubNavExpanded}
                        onClick={expandSideNav}
                    />
                    <HeaderName>
                        Cognos Analytics
                    </HeaderName>
                    <HeaderGlobalBar>
                        <HeaderGlobalAction aria-label="Search content">
                            <Search size="20" />
                        </HeaderGlobalAction>
                        <HeaderGlobalAction aria-label="Learn">
                            <Help size="20" />
                        </HeaderGlobalAction>
                        <HeaderGlobalAction aria-label="Notifications">
                            <Notification size="20" />
                        </HeaderGlobalAction>
                        <HeaderGlobalAction aria-label="Personal menu">
                            <UserAvatarFilled size="30" />
                        </HeaderGlobalAction>
                    </HeaderGlobalBar>
                    <SideNav
                        className="navigation--sidenav"
                        expanded={state.isSideNavExpanded}
                        isPersistent={false}
                        aria-label="Side nav"
                    >
                        <SideNavItems isSideNavExpanded={false}>
                            <SideNavLink renderIcon={Home}>
                                <Link to="/home">
                                    Home
                                </Link>
                            </SideNavLink>
                            <SwitcherDivider />
                            <SideNavLink renderIcon={Add}>
                                New
                            </SideNavLink>
                            <SideNavLink renderIcon={Upload}>
                                Upload data
                            </SideNavLink>
                            <SwitcherDivider />
                            <SideNavLink renderIcon={Folder}>
                                Content
                            </SideNavLink>
                            <SwitcherDivider />
                            <SideNavLink renderIcon={Time}>
                                Recent
                            </SideNavLink>
                            <SwitcherDivider />
                            <SideNavLink 
                                renderIcon={UserAdmin}
                                onClick={expandSubNav}
                            >
                                Manage
                            </SideNavLink>
                        </SideNavItems>
                    </SideNav>
                </Header>
            </Theme>
        </>

    );
  }
  
  export default Navigation;