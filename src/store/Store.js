import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer.js";



const initialState = {
  auth: {
    'IBM-BA-Authorization': '',
    'Access-Control-Allow-Origin': 'true'
  },
  login: {
    userID: process.env.REACT_APP_USERNAME,
    password: process.env.REACT_APP_PASSWORD
  },
  isSideNavExpanded: false,
  isSubNavExpanded: false,
  tenants: [],
  filteredTenants: [],
  addTenantModalOpen: false,
  editTenantModalOpen: false,
  editTenantForm: {
    defaultName: '',
    tenantID: '',
  },
  successNotification: false,

};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;