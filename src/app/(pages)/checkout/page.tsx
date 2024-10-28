

import ContentTitleHolder from "@/app/main/components/ContentTitleHolder";
import LayoutClient from "../layout-client";
import FormMyInformation from "./components/FormMyInformation";
import ItemsFormMyCart from "./components/ItemsFormMyCart";
import MapLocation from "./components/MapLocation";
import PaymentOptions from "./components/PaymentOptions";
import PlaceOrder from "./components/PlaceOrder";
import PricesTotals from "./components/PricesTotals";
import SpecifyDeliveryTime from "./components/SpecifyDeliveryTime";

const Checkout = () => {
    return (
        <main>
            <LayoutClient>
                <ContentTitleHolder />
                <div className='mx-auto max-w-screen-xl'>
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
                </div>
            </LayoutClient>
        </main>
    );
};

export default Checkout;
