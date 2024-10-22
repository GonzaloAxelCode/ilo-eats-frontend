"use client"

import { Provider } from 'react-redux';
import { appStoreImplementation } from "./main/data/appStoreImplementation";

const Providers = ({ children }: any) => {
  return (
    <Provider store={appStoreImplementation}>
      {children}
    </Provider>



  )
}

export default Providers