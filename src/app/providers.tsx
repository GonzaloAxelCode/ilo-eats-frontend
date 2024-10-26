"use client"

import { Provider as ReduxProvider } from 'react-redux';
import { UIProvider } from './main/context/UIContext';
import { appStoreImplementation } from "./main/data/appStoreImplementation";

const Providers = ({ children }: any) => {
  return (
    <UIProvider>
      <ReduxProvider store={appStoreImplementation}>
        {children}
      </ReduxProvider>
    </UIProvider>
  )
}

export default Providers