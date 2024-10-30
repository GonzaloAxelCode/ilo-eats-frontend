"use client"

import ContentTitleHolder from "@/app/main/components/ContentTitleHolder";
import { Form, Formik } from "formik";
import LayoutClient from "../layout-client";
import FormMyInformation from "./components/FormMyInformation";
import ItemsFormMyCart from "./components/ItemsFormMyCart";
import MapLocation from "./components/MapLocation";
import PaymentOptions from "./components/PaymentOptions";
import PlaceOrder from "./components/PlaceOrder";
import PricesTotals from "./components/PricesTotals";
import SpecifyDeliveryTime from "./components/SpecifyDeliveryTime";
import { FormOrderProvider } from "./context/FormOrderContext";

export const initialValues = {
    firstName: "Gonzalo Axel",
    lastName: "Valdez",
    streetAdress1: "Alto Ilo",
    streetAdress2: "Nuevo Ilo",
    country: "Peru",
    region: "Moquegua",
    postcode: "1806",
    phone: "96998945",
    email: "gonzaloaxelh@gmail.com",
    orderNotes: "Tanks for me order",
};


const Checkout = () => {
    const handleSubmit = (values: any) => {
        console.log(values);
    };
    return (
        <main>
            <LayoutClient>
                <ContentTitleHolder title="CHECKOUT" />
                <div className='mx-auto max-w-screen-xl'>
                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                        {(propsFormik: any) => (
                            <FormOrderProvider formikProps={propsFormik}>


                                <Form className="grid grid-cols-1 md:grid-cols-[3fr_2fr] justify-center w-full">
                                    <div>
                                        <SpecifyDeliveryTime />
                                        <FormMyInformation />
                                    </div>
                                    <div>
                                        <ItemsFormMyCart />
                                        <PricesTotals />
                                        <MapLocation />
                                        <PaymentOptions />
                                        <PlaceOrder />
                                    </div>
                                </Form>
                            </FormOrderProvider>
                        )}
                    </Formik>

                </div>
            </LayoutClient>
        </main>
    );
};

export default Checkout;
