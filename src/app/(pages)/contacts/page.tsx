import NewestLatestOffersSubscribe from "../homecomponents/NewestLatestOffersSubscribe"
import LayoutClient from "../layout-client"
import ContactDeliveryHours from "./components/ContactDeliveryHours"
import MapLocationFullScreen from "./components/MapLocationFullScreen"
import SendMessageForm from "./components/SendMessageForm"

const ContactsPage = () => {
    return (
        <main>
            <LayoutClient>
                <MapLocationFullScreen />
                <div className="flex">
                    <SendMessageForm />
                    <ContactDeliveryHours />
                </div>
                <NewestLatestOffersSubscribe />
            </LayoutClient>
        </main>
    )
}

export default ContactsPage