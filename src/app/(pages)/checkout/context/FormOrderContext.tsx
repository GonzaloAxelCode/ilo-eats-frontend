import { FormikProps } from "formik";
import React, { createContext, ReactNode, useContext } from "react";

interface FormOrderContextType {
    formikProps: FormikProps<any>;
}

const FormOrderContext = createContext<FormOrderContextType | undefined>(undefined);

export const useFormOrderContext = (): FormikProps<any> => {
    const context = useContext(FormOrderContext);
    if (!context) {
        throw new Error("useFormOrderContext must be used within a FormOrderProvider");
    }
    return context.formikProps;
};

export const FormOrderProvider: React.FC<{ children: ReactNode; formikProps: FormikProps<any> }> = ({ children, formikProps }) => {
    return (
        <FormOrderContext.Provider value={{ formikProps }}>
            {children}
        </FormOrderContext.Provider>
    );
};
