const Reducer = (state, action) => {
    switch (action.type) {
      case "SET_ADDTENANTMODALTOGGLE":
        return {
          ...state,
          addTenantModalOpen: action.payload,
        };
      case "SET_EDITTENANTMODALTOGGLE":
        return {
          ...state,
          editTenantModalOpen: action.payload,
        };
      case "SET_EDITTENANTFORM":
        return {
          ...state,
          editTenantForm: action.payload,
        };
      case "SET_TENANTLIST":
        return {
          ...state,
          tenants: action.payload,
        };  
      case "SET_FILTEREDLIST":
        return {
          ...state,
          filteredTenants: action.payload,
        };  
      case "SET_SESSIONID":
        return {
          ...state,
          auth: {
            'IBM-BA-Authorization': action.payload, 
            'Access-Control-Allow-Origin': 'true'
          }
        }  
      case "SET_SIDENAV":
        return {
          ...state,
          isSideNavExpanded: action.payload,
        };
      case "SET_SUBNAV":
        return {
          ...state,
          isSubNavExpanded: action.payload,
        };
      case "SET_SUCCESSNOTIFICATION":
        return {
          ...state,
          successNotification: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default Reducer;